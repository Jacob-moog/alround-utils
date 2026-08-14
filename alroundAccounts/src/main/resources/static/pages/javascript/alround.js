import { showContent } from "./tabController.js"
import { showResults } from "./tabController.js"
import { showYours } from "./tabController.js"
import { motioncard } from "./api/getMotions.js"
import { showcontentbtn } from "./tabController.js"
import { buttoncard } from "./api/getbuttons.js"
import { fetchbuttons } from "./api/getbuttons.js"
import { fetchprofile } from "./api/getProfile.js"
import { redirecteToAlround } from "./directory/private.js"
import { showcontentBrands } from "./tabController.js"
export const diameters={
  allW:"100%",
  allH:"100%",
  halfW:"50%",
  halfH:"50%",
  circle:"50%",
}
export const display={
  flex:"flex",
  flexDrow:"row",
  flexDcolu:"column",
  grid:"grid",
  placeCenter:"center",
  
  
}
export const cl={
  white:"white",
  main:"#ad1ec0",
  grey1:"#eeeeea",

}
const Html={
  html:document.querySelector(".html"),
  
}

const root={
    mainColor:"#ad1ec0",
  logo:"4px solid var(mainColor)",
  logodiameter:"15px",
  btnB:"5px",
  fontfamily:"Bitcount Single",  
  ease:"all  0.5s ease-in-out",
  borderofElements:`2px solid rgb(235,235,235)`,
  hoverSilver:`rgb(248, 248, 248)`,
barColor:`rgb(237, 237, 237)`,
loadingcolor:`rgb(244, 93, 255)`,
secondaryloadingcolor:`rgb(75, 93,255)`,
loadingwidth:`100%`,
loadingheight:`100%`,
circleR:`50%`,
loadingBackgroundColor:`white`,
skeletoncolor:`rgb(245,245,245)`,


}
export const ele={
   search:document.querySelector(".search"),
      searchinput:document.querySelector(".search-input"),
   content:document.querySelector(".content"),
   main:document.querySelector(".main"),
   showfilterbtn:document.querySelector(".show-filter-btn"),
   saves:document.querySelector(".saves"),
   yours:document.querySelector(".yours"),
   savecon:document.querySelector(".save-con"),
   yoursbtn:document.querySelector(".yours-btn"),
   results:document.querySelector(".result"),
   design:document.querySelector(".Design"),
   motions:document.querySelector(".motions"),
   sets:document.querySelector(".sets"),
   contentbtn:document.querySelector(".content-btn"),
   buttonstab:document.querySelector(".buttons-tab"),
   userbtn:document.querySelector(".user"),
   clearsearch:document.querySelector(".clear-search"),
   brandstab:document.querySelector(".brands-tab"),
   contentbrands:document.querySelector(".content-brands"),
}
function resize(){
  if(window.innerWidth<600){
  ele.search.style.width="100%";
  ele.content.style.gridTemplateColumns="repeat(2,180px)";
  ele.contentbtn.style.gridTemplateColumns="repeat(2,180px)";
  ele.savecon.style.gridAutoRows="250px";
  ele.content.style.gridAutoRows="250px";
  ele.contentbtn.style.gridAutoRows="250px";
  ele.main.style.flexDirection="Column";
  ele.main.style.alignItems="center";
  ele.savecon.style.gridTemplateColumns="repeat(2,180px)";
  
  }else if(window.innerWidth>600 && window.innerWidth<1000){

  ele.search.style.width="100%";
  ele.content.style.gridTemplateColumns="repeat(3,1fr)";
  ele.contentbtn.style.gridTemplateColumns="repeat(3,1fr)";
    ele.savecon.style.gridAutoRows="280px";
  ele.content.style.gridAutoRows="280px";
  ele.contentbtn.style.gridAutoRows="280px";
  ele.main.style.flexDirection="column";
  ele.main.style.alignItems="center";
  ele.savecon.style.gridTemplateColumns="repeat(3,1fr)";
  console.log("cc")
  }  else if(window.innerWidth>1000){

  ele.search.style.width="75%";
  ele.content.style.gridTemplateColumns="repeat(4,1fr)";
  ele.contentbtn.style.gridTemplateColumns="repeat(4,1fr)";
  ele.savecon.style.gridTemplateColumns="repeat(4,1fr)";
  ele.savecon.style.gridAutoRows="350px";
  ele.content.style.gridAutoRows="350px";
  ele.contentbtn.style.gridAutoRows="350px";
  ele.main.style.flexDirection="row";
  ele.main.style.alignItems="first baseline";


  }
}
export const fetchMotions=async()=>{
  const res=await fetch("/motions",{
    method:"GET",
  })
  const data=await res.json();
  for(let i=0;i<data.length;i++){
    const newcard=new motioncard();
    ele.content.append(newcard.card(data[i].code,data[i].name));
  }
}
export const fetchBrands=async()=>{
  const res=await fetch("/brands",{
    method:"GET",
  })
  const data=await res.json();
  for(let i=0;i<data.length;i++){
    const newcard=new motioncard();
    ele.contentbrands.append(newcard.card(data[i].code,data[i].name));
  }
}
window.addEventListener("load",()=>{
resize();
showContent();
fetchMotions();
})
window.addEventListener("resize",()=>{
resize();
})
//console.log(document.querySelector(".searchinput"))
ele.motions.addEventListener("click",()=>{
  if(getComputedStyle(ele.content).display=="grid"){return;}else{
  showContent();
  fetchMotions();}
})

ele.yoursbtn.addEventListener("click",()=>{
  showYours();
})
ele.buttonstab.addEventListener("click",()=>{
  if(getComputedStyle(ele.contentbtn).display=="grid"){return;}else{
  showcontentbtn();
  fetchbuttons();}
})
ele.brandstab.addEventListener("click",()=>{
 if(getComputedStyle(ele.contentbrands).display=="grid"){return;}else{ showcontentBrands();
;fetchBrands();}
})
ele.clearsearch.addEventListener("click",()=>{
  ele.searchinput.value="";

})

ele.searchinput.addEventListener("keydown",(event)=>{
  if(event.keyCode===13){
    event.preventDefault();
  }
})