import { ele } from "../alround.js";

export const fetchMotions=async()=>{
  const res=await fetch("/motions",{
    method:"GET",
  })
  const data=await res.json();
  console.log(data);
}

export class motioncard{
  card(code,name){
   let div=document.createElement("div");
   div.classList.add("motioncard");
   let span=document.createElement("span");
   let label=document.createElement("label");
   label.style.width="100%";
   label.style.height="30px";
   label.style.textAlign="center";
   label.textContent=name;
   span.style.width="100%";
   span.style.height="100%";
   span.style.display="grid";
   span.style.placeItems="center";
   span.innerHTML=code;
   div.append(span,label);
   return div;
  } 
}