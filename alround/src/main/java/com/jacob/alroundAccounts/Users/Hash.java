package com.jacob.alroundAccounts.Users;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
@Service
public class Hash {
  private static final BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();

  public String hasher(String password){
    return encoder.encode(password);
  }

  public boolean matcher(String password,String hashed){
    return encoder.matches(password, hashed);
  }
}
