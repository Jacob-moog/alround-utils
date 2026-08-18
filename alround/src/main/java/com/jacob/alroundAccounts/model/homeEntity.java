package com.jacob.alroundAccounts.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="home")
public class homeEntity {
  @Id
  private Long id;
  @Column(nullable=false,unique=false)
  private String name;
  @Column(nullable=false,unique=true,columnDefinition="TEXT")
  private String code;

  public void setId(Long id){
    this.id=id;
  }
  public Long getId(){
    return id;
  }
  public void setName(String name){
    this.name=name;
  }
  public String getName(){
    return name;
  }
  public void setCode(String code){
    this.code=code;
  }
  public String getCode(){
    return code;
  }
}
