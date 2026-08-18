package com.jacob.alroundAccounts.router;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RedirectPublic {
  @GetMapping("/home")
  public String toHome(){
    return "forward:/pages/html/welcome.html";
  }

    @GetMapping("/developer")
  public String toDeveloper(){
    return "forward:/pages/html/developer.html";
  }
  @GetMapping("/account")
  public String toProfile(){
    return "forward:/pages/html/profile.html";
  }
    @GetMapping("/alround")
  public String toAlround(){
    return "forward:/pages/html/alround.html";
  }
}
