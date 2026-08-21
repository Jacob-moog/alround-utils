import { homecard } from "./api/getHome.js";
export const ele={
  trybtn:document.querySelector(".trybtn"),
  body:document.querySelector(".body"),
  logoh3:document.querySelector(".logoh3"),
homebtns:document.querySelector(".homebtns"),
try:document.querySelector(".try"),
morebtn:document.querySelector(".more-btn"),
scrollbtn:document.querySelector("#scrollbtn"),
homecopyutil:document.querySelector(".home-copy-util"),
}

const welcome=async()=>{
  const res=await fetch("/welcome",{
    method:"GET",
  })
  const data=await res.json();
    console.log(data);

  for(let i=0;i<data.length;i++){
    const newcard=new homecard();
    ele.try.append(newcard.card(data[i].code,data[i].name));
  }
  console.log(data);
}
ele.scrollbtn.addEventListener("click",()=>{
  window.scrollBy({
    top:650,
    behavior:"smooth",
  })
})

ele.homecopyutil.addEventListener("click",()=>{
  navigator.clipboard.writeText(`<link rel="stylesheet"  href="https://old-grass-c174.jacobmoogdeveloper.workers.dev">`)
});

window.addEventListener("DOMContentLoaded",()=>{
   ele.trybtn.addEventListener("click",()=>{
  window.scrollTo({
    top:650,
    behavior:"smooth",
  })

 })
})
const resize=()=>{
  if(window.innerWidth<800){
    
    ele.homebtns.style.flexDirection="column";
    ele.try.style.gridTemplateColumns="repeat(2,1fr)";

  }else{
    
    ele.homebtns.style.flexDirection="row";
    ele.try.style.gridTemplateColumns="repeat(4,1fr)";

  }
}
window.addEventListener("load",()=>{resize();welcome()});
window.addEventListener("resize",()=>{resize()});
