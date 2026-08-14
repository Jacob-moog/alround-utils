package com.jacob.alroundAccounts.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="users")
public class profileEntity {
  @Id
  private Long id;
  private String email;
  private String password;

  public void setEmail(String email){
    this.email=email;
  }
  public String getEmail(){
    return email;
  }
  public void setPassword(String password){
    this.password=password;
  }
  public String getPassword(){
    return password;
  }
    public void setId(Long id){
    this.id=id;
  }
  public Long getId(){
    return id;
  }
}
