package com.jacob.alroundAccounts.model;
import jakarta.persistence.*;

@Entity
@Table(name="messages")
public class deletedMessage {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  @Column(nullable=true,unique=false,columnDefinition="TEXT",length=1000)
  private String message;

  public Long getId(){
    return id;
  }
  public void setId(Long id){
    this.id=id;
  }

  public String getMessage(){
    return message;
  }
  public void setMessage(String message){
    this.message=message;
  }
}

