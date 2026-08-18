package com.jacob.alroundAccounts.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.*;

import jakarta.transaction.Transactional;
public interface UserRepo extends JpaRepository<UserEntity,Long>{
   boolean existsByEmail(String email);
   boolean existsById(Long id);
   UserEntity findByEmail(String email);
   void deleteById(Long id);
  @Transactional
   void deleteByEmail(String email);

}
