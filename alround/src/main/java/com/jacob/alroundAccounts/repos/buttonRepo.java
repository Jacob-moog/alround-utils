package com.jacob.alroundAccounts.repos;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jacob.alroundAccounts.model.buttonEntity;
public interface buttonRepo extends JpaRepository<buttonEntity,Long>{
  List<buttonEntity> findAllByNameContainingIgnoreCase(String name);
}
