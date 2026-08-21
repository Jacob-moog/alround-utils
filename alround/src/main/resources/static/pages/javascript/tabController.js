import { ele } from "./alround.js";
export const showYours=()=>{
       ele.content.style.display="none";
       ele.results.style.display="none";
       ele.yours.style.display="flex";
       ele.contentbtn.style.display="none";
       ele.contentbrands.style.display="none";

}
export const showResults=()=>{
       ele.results.replaceChildren();
       ele.content.style.display="none";
       ele.results.style.display="grid";
       ele.yours.style.display="none";
       ele.contentbtn.style.display="none";   
       ele.contentbrands.style.display="none";
}

export const showContent=()=>{
       ele.content.replaceChildren();
       ele.content.style.display="grid";
       ele.results.style.display="none";
       ele.yours.style.display="none";    
       ele.contentbtn.style.display="none";
       ele.contentbrands.style.display="none";

}
export const showcontentbtn=()=>{
       ele.contentbtn.replaceChildren();
       ele.content.style.display="none";
       ele.results.style.display="none";
       ele.yours.style.display="none";    
       ele.contentbtn.style.display="grid";
       ele.contentbrands.style.display="none";

}


function comingSoon(){
  ele.contentbrands.style.placeItems="center";
  ele.contentbrands.style.textAlign="center";
  ele.contentbrands.style.width="100%";
  ele.contentbrands.innerHTML=`<h1 style="color:rgb(200,200,200);font-size:60px;">brand loaders coming soon!</h1>`
}
export const showcontentBrands=()=>{
       ele.contentbrands.replaceChildren();
       comingSoon();
       ele.content.style.display="none";
       ele.results.style.display="none";
       ele.yours.style.display="none";    
       ele.contentbtn.style.display="none";
       ele.contentbrands.style.display="grid";
       
}