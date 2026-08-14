import {el} from "../javascript/profileDocVars.js"

export function displayimg(){
try{
let image=el.profileinput.files[0];
let imageurl=URL.createObjectURL(image);
if(image==null || image=="" || image==[]){
 throw new Error("empty file");
}else{
el.profiledisplay.style.backgroundImage=`url(${imageurl})`;
console.log("clicked",image)
}
  }
  catch(error){
    alert("enter image");
  }
}
