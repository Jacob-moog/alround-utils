import { deleteaccount } from "./api/deleteAccount.js";
import { el } from "./profileDocVars.js";
import { displayDeleteAccount } from "./profileFx.js";
import { displayEmailupdate } from "./profileFx.js";
import { displayPasswordupdate } from "./profileFx.js";
import { profileconDisplay } from "./profileFx.js";

//==================================Display pf========================================//





el.backfromprofile.addEventListener("click",()=>{
  profileconDisplay();
})


//DISPLAY EMAIL UPDATE TOGGLE

el.updateemail.addEventListener("click",()=>{
 displayEmailupdate();
})

el.closeupdateemail.addEventListener("click",()=>{
  displayEmailupdate();
})

//PASSWORD TOGGLE

el.closeupdatepassword.addEventListener("click",()=>{
  displayPasswordupdate();
})

el.updatepassword.addEventListener("click",()=>{
  displayPasswordupdate();
})

//DELETE ACCOUNT TOGGLE
el.deleteaccount.addEventListener("click",()=>{
 displayDeleteAccount();

})

el.closedelete.addEventListener("click",(event)=>{
  event.preventDefault();
  displayDeleteAccount();

})



///
window.addEventListener("load",async ()=>{
  
  const res=await fetch("/profile",{
    method:"GET",
    credentials:"include"
  })
  console.log(res);

  const data=await res.json();
  console.log(data);
  el.displayemail.textContent=data.email;

})

el.validatedeletionbtn.addEventListener("click",()=>{
  deleteaccount();
})