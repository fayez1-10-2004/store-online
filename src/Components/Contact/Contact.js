import React, { useEffect, useRef, useState } from 'react'
import ContactStyle from './Contact.module.css'
function Contact() {

    const userName=useRef()
    const email=useRef()
    const textarea=useRef()
    const [msg,setmsg]=useState([])

useEffect(()=>{

 const savemsg=localStorage.getItem('message' )

 /*اراجع تاني عليه */ 
if(savemsg){
    setmsg(JSON.parse(savemsg))
}
},[])



    useEffect(()=>{

localStorage.setItem('message',JSON.stringify(msg))


    },[msg])

const handelform=(e)=>{
e.preventDefault()

const Data={
Name:userName.current.value,
Em:email.current.value,
Tx:textarea.current.value,
}

setmsg((prev)=>[...prev, Data])
userName.current.value=""
email.current.value=""
textarea.current.value=""

}

    return (
       <section className={ContactStyle.Contact}>
<form className={ContactStyle.form} onSubmit={handelform}>
    <input type='text' placeholder='please write username' ref={userName} required/>
    <input type='email' placeholder='please write email' ref={email} required/>
    <textarea placeholder='write your message' ref={textarea} required/>
    <button type='submit'>
        send
    </button>
</form>


{msg.map((msg,id) => (
<div className={ContactStyle.msg} key={id}> 
<h1>{msg.Name}</h1>
<hr></hr>
<h4>{msg.Em}</h4>
<hr></hr>
<p>{msg.Tx}</p>

</div>
)
)
}
       </section>
    )
}

export default Contact