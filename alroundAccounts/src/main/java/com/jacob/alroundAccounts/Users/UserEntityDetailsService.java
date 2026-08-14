package com.jacob.alroundAccounts.Users;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.*;
@Service
public class UserEntityDetailsService implements UserDetailsService {
  private final UserRepo repo;
   public UserEntityDetailsService(UserRepo repo){
    this.repo=repo;
   };
   @Override public UserDetails loadUserByUsername(String user)throws UsernameNotFoundException{
    UserEntity exists=repo.findByEmail(user);
    if(exists==null){
      throw new UsernameNotFoundException("user not found");
    }
    return new UserEntityDetails(exists);
   }
}
