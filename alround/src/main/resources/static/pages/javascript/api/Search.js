import { ele } from "../alround.js";
export class searchcard{
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

export const searchButton=async ()=>{
   let inputvalue=ele.searchinput.value;
   const searchbuttonresponse=await fetch(`/search/button?input=${encodeURIComponent(inputvalue)}`,{
    method:"POST",
    headers:{
      "Content-Type":"text/plain"
    },
    body:JSON.stringify({
     input:inputvalue,
    })
   })
   const searchbuttondata=await searchbuttonresponse.json();
   for(const i in searchbuttondata){
    if(searchbuttondata[i]==null){return;}else{
    const newcard=new searchcard();
    ele.results.append(newcard.card(searchbuttondata[i].code,searchbuttondata[i].name));
    }
   }
}

export const searchMotion=async ()=>{
   let inputvalue=ele.searchinput.value;
   const searchmotionresponse=await fetch(`/search/motion?input=${encodeURIComponent(inputvalue)}`,{
    method:"POST",
    headers:{
      "Content-Type":"text/plain"
    },
    body:JSON.stringify({
     input:inputvalue,
    })
   })
   const searchmotiondata=await searchmotionresponse.json();
   for(let i=0;i<searchmotiondata.length;i++){
    if(searchmotiondata[i]==null){return;}else{
    const newcard=new searchcard();
    ele.results.append(newcard.card(searchmotiondata[i].code,searchmotiondata[i].name));}
   }
}

export const searchBrand=async ()=>{
   let inputvalue=ele.searchinput.value;
   const searchbrandresponse=await fetch(`/search/brand?input=${encodeURIComponent(inputvalue)}`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
     input:inputvalue,
    })
   })
   const searchBranddata=await searchbrandresponse.json();
   for(let i=0;i<searchBranddata.length;i++){
    if(searchBranddata[i]==null){return;}else{
    const newcard=new searchcard();
    ele.results.append(newcard.card(searchBranddata[i].code,searchBranddata[i].name));
    }
   }
}