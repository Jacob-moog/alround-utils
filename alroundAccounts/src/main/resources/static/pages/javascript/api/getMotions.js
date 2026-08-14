import { ele } from "../alround.js";
export class motioncard{
  card(code,name){
   let div=document.createElement("div");
   div.classList.add("motioncard");
   let span=document.createElement("span");
   let label=document.createElement("label");
   label.style.width="100%";
   label.style.height="50px";
   label.style.textAlign="center";
   label.style.justifyContent="center";
   label.style.display="flex";
   label.textContent=name;
   label.style.flexWrap="nowrap";
   span.style.width="100%";
   span.style.height="100%";
   span.style.display="grid";
   span.style.placeItems="center";
   span.style.overflow="hidden";
   let copybtn=document.createElement("button");
   copybtn.addEventListener("click",async()=>{
    await navigator.clipboard.writeText(code);

   })
  copybtn.innerHTML=`<i class="fa-regular fa-copy" style="scale:1.1"></i>`;
   copybtn.classList.add("copybtn");
   copybtn.style.marginLeft="auto";
   span.innerHTML=code;
   div.append(copybtn,span,label);
   return div;
  } 
  
}
export const fetchMotions=async()=>{
  const res=await fetch("/motions",{
    method:"GET",
  })
  const data=await res.json();
  for(let i=0;i<data.length;i++){
    const newcard=new motioncard();
    body.append(newcard.card(data[i].code,data[i].name));
  }
}