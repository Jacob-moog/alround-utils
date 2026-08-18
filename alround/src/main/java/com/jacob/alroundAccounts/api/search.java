package com.jacob.alroundAccounts.api;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import com.jacob.alroundAccounts.repos.brandRepo;
import com.jacob.alroundAccounts.repos.buttonRepo;
import com.jacob.alroundAccounts.repos.motionRepo;
import com.jacob.alroundAccounts.model.*;
@RestController
@CrossOrigin(origins="*")
public class search {
   private final  brandRepo  brandrepo;
   private final  buttonRepo buttonrepo;
   private final  motionRepo motionrepo;
   public search(brandRepo brandrepo,buttonRepo buttonrepo,motionRepo motionrepo){
    this.buttonrepo=buttonrepo;
    this.motionrepo=motionrepo;
    this.brandrepo = brandrepo;
   }
   @PostMapping("/search/button")
   public List<buttonEntity> searchButton(@RequestParam String input){
    return buttonrepo.findAllByNameContainingIgnoreCase(input);
   }

   @PostMapping("/search/motion")
   public List<motionEntity> searchMotion(@RequestParam String input){
    return motionrepo.findAllByNameContainingIgnoreCase(input);
   }

    @PostMapping("/search/brand")
   public List<brandEntity> searchBrand(@RequestParam String input){
    return brandrepo.findAllByNameContainingIgnoreCase(input);
   }

}
