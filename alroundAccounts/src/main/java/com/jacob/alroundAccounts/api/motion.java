package com.jacob.alroundAccounts.api;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jacob.alroundAccounts.model.motionEntity;
import com.jacob.alroundAccounts.service.motionService;
@RestController
public class motion {
  public final motionService service;
  public motion(motionService service){
    this.service=service;
  }

  @GetMapping("/motions")
  public List<motionEntity> getMotions(){
    return service.getAllmotions();
  }
  
}
