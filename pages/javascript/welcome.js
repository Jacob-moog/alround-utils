 const ele={
  trybtn:document.querySelector(".trybtn"),
  body:document.querySelector(".body"),
  logoh3:document.querySelector(".logoh3"),
homebtns:document.querySelector(".homebtns"),
try:document.querySelector(".try"),
}

 ele.trybtn.addEventListener("click",()=>{
  window.scrollTo({
    top:650,
    behavior:"smooth",
  })

 })
ele.homebtn.addEventListener("click",()=>{
 
  window.scrollBy({
    top:0,
    behavior:"smooth",
  })
})
ele.featuresbtn.addEventListener("click",()=>{
  window.scrollTo({
    top:1250,
    behavior:"smooth",
  })
})

const resize=()=>{
  if(window.innerWidth<800){
    ele.logoh3.style.display="none";
    ele.homebtns.style.flexDirection="column";

  }else{
        ele.logoh3.style.display="block";
    ele.homebtns.style.flexDirection="row";

  }
}
window.addEventListener("load",()=>{resize()});
window.addEventListener("resize",()=>{resize()});
