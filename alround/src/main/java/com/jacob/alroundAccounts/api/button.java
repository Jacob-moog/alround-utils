package com.jacob.alroundAccounts.api;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jacob.alroundAccounts.model.buttonEntity;
import com.jacob.alroundAccounts.repos.buttonRepo;
@RestController
@CrossOrigin(origins="*")
public class button {
  private final buttonRepo repo;
  public button(buttonRepo repo){
    this.repo=repo;
  }
  @GetMapping("/buttons")
  public List<buttonEntity> getbuttons(){
    return repo.findAll();
  }
}
