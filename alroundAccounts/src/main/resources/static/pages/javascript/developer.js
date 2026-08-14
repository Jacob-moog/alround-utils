const ele={
  contactbtn:document.querySelector(".contact-btn"),
  contactpopup:document.querySelector(".contact-popup"),
  closecontact:document.querySelector(".close-contact"),
}

const popup=()=>{
  if(getComputedStyle(ele.contactpopup).display=="none"){
    ele.contactpopup.style.display="grid";
  }else{
      ele.contactpopup.style.display="none";  
  }

}

ele.contactbtn.addEventListener("click",()=>{popup();})
ele.closecontact.addEventListener("click",()=>{popup();})