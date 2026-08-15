package com.jacob.alroundAccounts.repos;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jacob.alroundAccounts.model.brandEntity;
public interface  brandRepo extends JpaRepository<brandEntity, Long>{
   List<brandEntity> findAllByNameContainingIgnoreCase(String name);
}
