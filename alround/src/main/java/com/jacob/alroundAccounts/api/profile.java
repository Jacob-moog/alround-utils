package com.jacob.alroundAccounts.api;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.jacob.alroundAccounts.Users.UserEntity;
import com.jacob.alroundAccounts.Users.UserRepo;
import com.jacob.alroundAccounts.model.deletedMessage;
import com.jacob.alroundAccounts.repos.messageRepo;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins="*")
public class profile {
  private final UserRepo repo;
  private final messageRepo messagerepo;
  public profile(UserRepo repo,messageRepo messagerepo){
    this.repo=repo;
    this.messagerepo=messagerepo;
  }

  @GetMapping("/profile")
  public UserEntity getProfile(Authentication auth) {
    System.out.println("profile reached--"+auth.getName());
      return repo.findByEmail(auth.getName());
  }
  @PostMapping("/delete/profile")
  public RedirectView postDeletionMessage(deletedMessage entity,Authentication auth,HttpServletRequest servlet) {
      //TODO: process POST request
       messagerepo.save(entity);   
       repo.deleteByEmail(auth.getName());
       HttpSession session=servlet.getSession(false);
       
       if(session!=null){
        session.invalidate();
       }
       return new RedirectView("/home");
  }
  
}
