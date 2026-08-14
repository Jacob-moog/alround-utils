import { el } from "../profileDocVars.js";
export const deleteaccount=async ()=>{
  const res=await fetch("/delete/profile",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      reason:el.reasonfordeletion.value,
    }),
    credentials:"include",
  })
  if(res.redirected){window.location.href=res.url;}else{
    return;
  }
}