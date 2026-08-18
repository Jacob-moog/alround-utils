package com.jacob.alroundAccounts.api;
import org.springframework.web.bind.annotation.*;
import com.jacob.alroundAccounts.repos.*;
import com.jacob.alroundAccounts.model.*;
import java.util.*;
@RestController
@CrossOrigin(origins="*")
public class welcome {
  private final homeRepo repo;
  public welcome(homeRepo repo){
    this.repo=repo;
  }
  @GetMapping("/welcome")
  public List<homeEntity> welcome(){
    return repo.findAll();
  }
}
