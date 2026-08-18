package com.jacob.alroundAccounts.repos;
import org.springframework.data.jpa.repository.*;
import com.jacob.alroundAccounts.model.*;
import java.util.*;
public interface homeRepo extends JpaRepository<homeEntity, Long>{
  List<homeEntity> findAll();
}
