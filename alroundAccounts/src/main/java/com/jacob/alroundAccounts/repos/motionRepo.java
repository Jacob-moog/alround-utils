package com.jacob.alroundAccounts.repos;
import org.springframework.data.jpa.repository.JpaRepository;

import com.jacob.alroundAccounts.model.motionEntity;
public interface  motionRepo extends JpaRepository<motionEntity, Long>{
  
}
