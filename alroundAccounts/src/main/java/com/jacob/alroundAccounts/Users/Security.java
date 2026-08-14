package com.jacob.alroundAccounts.Users;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.Customizer;
@Configuration
public class Security {
  
  @Bean public SecurityFilterChain filter(HttpSecurity http)throws Exception{
    http.csrf(csrf->csrf.disable());
    http.authorizeHttpRequests(auth->auth
      .requestMatchers(
        "/pages/html/login.html","/pages/css/login.css","/signin",
        "/pages/html/signup.html","/pages/css/signup.css","/signup","/join",
        "/pages/html/welcome.html","/pages/css/welcome.css","/pages/javascript/welcome.js","/pages/javascript/api/getHome.js","/welcome","/home",
        "/pages/css/gitcss.css",
        "/pages/html/developer.html","/pages/css/developer.css","/pages/javascript/developer.js","/developer",
        "/pages/images/developerimg.jpeg",
        "/pages/css/about.css","/pages/html/about.html","/about",
        "/pages/html/Terms&Services.html","/pages/css/Terms&Services.css","/terms",
        "/pages/html/how.html","/pages/css/how.css","/how"
      )
     .permitAll()
     .anyRequest()
     .authenticated()
    );
    http.formLogin(form->form
      .loginPage("/signin")
      .loginProcessingUrl("/login")
      .defaultSuccessUrl("/alround",true)
      .usernameParameter("email")
      .passwordParameter("password")
      
    );
    http.logout(logout->logout
      .deleteCookies("JSESSIONID")
      .logoutSuccessUrl("/home")
      .invalidateHttpSession(true)
    );
    return http.build();
  }
  @Bean PasswordEncoder encoder(){
    return new BCryptPasswordEncoder();
  }
}
