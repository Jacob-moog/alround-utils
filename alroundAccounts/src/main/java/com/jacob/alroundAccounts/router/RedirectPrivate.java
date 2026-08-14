package com.jacob.alroundAccounts.router;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class RedirectPrivate {
  @GetMapping("/account")
  public String toProfile(){
    return "forward:/pages/html/profile.html";
  }
    @GetMapping("/alround")
  public String toAlround(){
    return "forward:/pages/html/alround.html";
  }
}
