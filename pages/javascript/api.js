import { ele } from "./alround";

export const fetchMotions=async ()=>{
      const res=await fetch("/motions",{
        method:"GET",
})
 const motions=await res.json();
 return motions;
}

export const fetchYours=()=>{
  const res=await fetch("/yours",{
    method:"GET",
    credentials:"include",
  })
  const yours=await res.json(),
}

export const fetchButtons=()=>{
  
}