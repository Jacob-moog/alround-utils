package com.jacob.alroundAccounts.Users;
import jakarta.persistence.Table;
@Table(name="users")
public class EmailDto {
  private String email;
  
  public String getEmail(){
    return email;
  }
  public void setEmail(String email){
    this.email=email;
  };
}
