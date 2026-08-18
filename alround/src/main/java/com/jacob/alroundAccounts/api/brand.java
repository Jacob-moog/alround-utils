package com.jacob.alroundAccounts.api;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jacob.alroundAccounts.model.*;
import com.jacob.alroundAccounts.service.brandService;
@RestController
public class brand {
  public final brandService service;
  public brand(brandService service){
    this.service=service;
  }

  @GetMapping("/brands")
  public List<brandEntity> getBrands(){
    return service.getAllbrands();
  }
  
}
