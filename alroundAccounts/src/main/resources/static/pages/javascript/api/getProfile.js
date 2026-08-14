export const fetchprofile=async ()=>{
  const res=await fetch("/profile",{
    method:"GET",
  })
  const data=await res.json();
}