package com.jacob.alroundAccounts.Users;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="*")
public class UserEndpoint {
    private final UserRepo repo;
    private final Hash hash;
    public UserEndpoint(UserRepo repo,Hash hash){
      this.repo=repo;
      this.hash=hash;
    }

    @PostMapping("/signup")
    public Map<String,String> signupUser(@RequestBody UserEntity entity){
      String entryEmail=entity.getEmail();
      String entryPassword=entity.getPassword();

      if(entryEmail.isEmpty() ||  entryPassword.isEmpty()){
        return Map.of("message","empty input");
      }
      
      for(int i=0;i<entryEmail.length();i++){
        if(entryEmail.length()<9){
          return Map.of("message","invalid email");
        }
        
      }
      for(int i=0;i<entryPassword.length();i++){
        if(entryPassword.length()<5 ){
          return Map.of("message","invalid password");
        }
      }
      boolean exists=repo.existsByEmail(entity.getEmail());
      if(exists==true){
        return Map.of("message","exists");
      }
      entity.setPassword(hash.hasher(entity.getPassword()));
      repo.save(entity);
      return Map.of("message","saved");
    }

    @PostMapping("/delete/{id}")
    public Map<String,String> deleteUser(@PathVariable Long id){
      repo.deleteById(id);
      Boolean exists=repo.existsById(id);
      if(exists!=true){
      return Map.of("message","deleted");
      }
      return Map.of("message","delete fail");
    }


    @PatchMapping("/updateEmail/{id}")
    public Map<String,String> updateEmail(@PathVariable Long id,@RequestBody EmailDto dto){
    UserEntity entity=repo.findById(id).orElseThrow();
    if(entity==null){
        return Map.of("message","usernot found");
    }
    
    entity.setEmail(dto.getEmail());
    repo.save(entity);
    return Map.of("message"," email changed");
    }
  }
