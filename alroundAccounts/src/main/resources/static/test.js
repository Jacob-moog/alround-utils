import {motioncard} from "../../../../../getMotions.js"
let body=document.querySelector(".body");
const fetchMotions=async()=>{
  const res=await fetch("/motions",{
    method:"GET",
  })
  const data=await res.json();
  for(let i=0;i<data.length;i++){
    const newcard=new motioncard();
    body.append(newcard.card(data[i].code,data[i].name));
  }
}
window.addEventListener("load",()=>{
  console.log("try");
  fetchMotions();
  console.log("fetch?")
})