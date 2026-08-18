package com.jacob.alroundAccounts.Users;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.*;
import java.util.*;
public class UserEntityDetails implements UserDetails{
  private final UserEntity entity;
  public UserEntityDetails(UserEntity entity){
    this.entity=entity;
  }
  @Override public Collection<? extends GrantedAuthority>getAuthorities(){
    return List.of(new SimpleGrantedAuthority("USER_ROLE"));
  }
  @Override public String getUsername(){
    return entity.getEmail();
  }
  @Override public String getPassword(){
    return entity.getPassword();
  }
  @Override public boolean isAccountNonLocked(){
    return true;
  }
  @Override public boolean isAccountNonExpired(){
    return true;
  }
  @Override public boolean isEnabled(){
    return true;
  }
  @Override public boolean isCredentialsNonExpired(){
    return true;
  }
}
