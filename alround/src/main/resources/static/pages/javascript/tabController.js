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
export const showcontentBrands=()=>{
       ele.contentbrands.replaceChildren();
       ele.content.style.display="none";
       ele.results.style.display="none";
       ele.yours.style.display="none";    
       ele.contentbtn.style.display="none";
       ele.contentbrands.style.display="grid";
}