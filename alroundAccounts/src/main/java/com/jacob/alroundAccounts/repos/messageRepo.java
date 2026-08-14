package com.jacob.alroundAccounts.repos;
import org.springframework.data.jpa.repository.*;
import com.jacob.alroundAccounts.model.*;

public interface messageRepo extends JpaRepository<deletedMessage,Long>{
  
}
