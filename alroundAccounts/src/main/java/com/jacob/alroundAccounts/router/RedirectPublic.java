package com.jacob.alroundAccounts.router;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RedirectPublic {
  @GetMapping("/home")
  public String toHome(){
    return "forward:/pages/html/welcome.html";
  }
    @GetMapping("/join")
  public String toSignup(){
    return "forward:/pages/html/signup.html";
  }

    @GetMapping("/signin")
  public String toLogin(){
    return "forward:/pages/html/login.html";
  }
  @GetMapping("/terms")
  public String toPrivacy(){
    return "forward:/pages/html/Terms&Services.html";
  }
    @GetMapping("/developer")
  public String toDeveloper(){
    return "forward:/pages/html/developer.html";
  }
    @GetMapping("/about")
  public String toAbout(){
    return "forward:/pages/html/about.html";
  }

      @GetMapping("/support")
  public String toSupport(){
    return "forward:/pages/html/support.html";
  }

    @GetMapping("/how")
  public String toHow(){
    return "forward:/pages/html/how.html";
  }
}
