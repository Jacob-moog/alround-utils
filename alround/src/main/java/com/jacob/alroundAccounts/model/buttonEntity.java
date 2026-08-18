package com.jacob.alroundAccounts.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name="buttons")
public class buttonEntity{
  @Id
  private Long id;
  private String name;
  @Column(columnDefinition="TEXT")
  private String code;
  
  public Long getId(){
    return id;
  }

  public String getName(){
    return name;
  }

  public String getCode(){
    return code;
  }
}
