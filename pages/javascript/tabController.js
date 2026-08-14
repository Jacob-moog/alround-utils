import { ele } from "./alround.js";

export const showYours=()=>{
       ele.content.style.display="none";
       ele.results.style.display="none";
       ele.yours.style.display="flex";
}
export const showResults=()=>{
       ele.content.style.display="none";
       ele.results.style.display="grid";
       ele.yours.style.display="none";
    
}

export const showContent=()=>{
       ele.content.style.display="grid";
       ele.results.style.display="none";
       ele.yours.style.display="none";    
}