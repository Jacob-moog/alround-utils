package com.jacob.alroundAccounts.service;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jacob.alroundAccounts.model.brandEntity;
import com.jacob.alroundAccounts.repos.brandRepo;
@Service
public class brandService {
    private final brandRepo repo;
    public brandService(brandRepo repo){
      this.repo=repo;
    }
    
    @Transactional
    public List<brandEntity> getAllbrands(){
      return repo.findAll();
    }
}
