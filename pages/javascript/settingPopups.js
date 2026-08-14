import { el } from "./profileDocVars.js";
import { displayDeleteAccount } from "./profileFx.js";
import { displayEmailupdate } from "./profileFx.js";
import { displayPasswordupdate } from "./profileFx.js";
import {displayProfileupdate} from "./profileFx.js"
import { profileconDisplay } from "./profileFx.js";
import { displayimg } from "./profileUpdaters.js";


//==================================Display pf========================================//





el.backfromprofile.addEventListener("click",()=>{
  profileconDisplay();
})


//DISPLAY PROFILE TOGGLE
el.closeprofileupdate.addEventListener("click",()=>{
  displayProfileupdate();
})

el.profilecon.addEventListener("click",()=>{
   displayProfileupdate();
})

el.updateprofile.addEventListener("click",()=>{
  displayProfileupdate();
})

//DISPLAY EMAIL UPDATE TOGGLE

el.updateemail.addEventListener("click",()=>{
 displayEmailupdate();
 console.log("vcloi")
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

el.profileinput.addEventListener("input",()=>{
  displayimg();
})

