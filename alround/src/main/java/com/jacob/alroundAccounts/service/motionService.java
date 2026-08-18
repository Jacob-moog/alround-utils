package com.jacob.alroundAccounts.service;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jacob.alroundAccounts.model.motionEntity;
import com.jacob.alroundAccounts.repos.motionRepo;
@Service
public class motionService {
    private final motionRepo repo;
    public motionService(motionRepo repo){
      this.repo=repo;
    }
    
    @Transactional
    public List<motionEntity> getAllmotions(){
      return repo.findAll();
    }
}
