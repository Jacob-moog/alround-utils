package com.jacob.alroundAccounts.repos;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jacob.alroundAccounts.model.motionEntity;
public interface  motionRepo extends JpaRepository<motionEntity, Long>{
  List<motionEntity> findAllByNameContainingIgnoreCase(String name);
}
