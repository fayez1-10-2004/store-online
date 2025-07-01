import React,{createContext, useEffect, useState} from "react";
export const ContextAuth=createContext()
const AutProvider=({children})=>{
const [user,setuser]=useState(()=>{

const saveonuser=localStorage.getItem('onuser')
return saveonuser?JSON.parse(saveonuser):null


})

const [regUser,setregUser]=useState(
()=>{
    try{
const saveuser=localStorage.getItem('user')
return saveuser?JSON.parse(saveuser):null
}
catch(err){
localStorage.removeItem('user')
return null
}
}
)
const login=(phone,pass)=>{
    if(regUser&&regUser.phone===phone&&regUser.pass===pass){

        const newUser={phone ,pass,fristname:regUser.fristname,lastname:regUser.lastname,email:regUser.email}
        setuser(newUser)
localStorage.setItem('onuser',JSON.stringify(newUser))

return true
    }
    else{
alert('valid data')
return false
    }
    }
const reg=(fristname,lastname,email,phone,pass)=>setregUser({fristname,lastname,email,phone,pass})
const logout= ()=>{

setuser(null)
    localStorage.removeItem('onuser')
}
useEffect(()=>{

localStorage.setItem('user',JSON.stringify(regUser))

},[regUser])

useEffect(() => {
  const saveonuser = localStorage.getItem('onuser');
  if (saveonuser) {
    setuser(JSON.parse(saveonuser));
  }
}, []);
return(

<ContextAuth.Provider value={{regUser,user,login,logout,reg}}>

{children}
</ContextAuth.Provider>



)



}
export default AutProvider