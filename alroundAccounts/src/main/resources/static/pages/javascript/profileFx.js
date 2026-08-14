import { el } from "./profileDocVars.js";

export const displayDeleteAccount=()=>{
  if(getComputedStyle(el.deleteaccountpopup).display=="none"){
    el.deleteaccountpopup.style.display="grid";
  }else{
        el.deleteaccountpopup.style.display="none";
  }
}

export const displayPasswordupdate=()=>{
  if(getComputedStyle(el.passwordupdatepopup).display=="none"){
    el.passwordupdatepopup.style.display="grid";
  }else{
    el.passwordupdatepopup.style.display="none";
  }
}
export const displayEmailupdate=()=>{
  if(getComputedStyle(el.emailupdatepopup).display=="none"){
    el.emailupdatepopup.style.display="grid";
  }else{
  el.emailupdatepopup.style.display="none";

  }
}


export const profileconDisplay=()=>{
  if(getComputedStyle(el.profileContainer).display=="none"){
    el.profileContainer.style.display="flex";
  }else{
    el.profileContainer.style.display="none";
  }
}


