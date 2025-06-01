import React, { useEffect, useRef, useState } from 'react'
import formstyle from './Form.module.css'
import axios from 'axios'
function Form() {

    const fristname = useRef()
    const lastname = useRef()
    const emailinput = useRef()
    const phoneinput = useRef()
    const [user, setuser] = useState(null)
    const [message, setmessage] = useState("")


    useEffect(() => {



        const storgeuser = localStorage.getItem('user')
        if (storgeuser) {

            setuser(JSON.parse(storgeuser))
        }

    }, [])


    const handelform = (event) => {
        event.preventDefault()
        const userData = {
            frist: fristname.current.value,
            last: lastname.current.value,
            email: emailinput.current.value,
            phone: phoneinput.current.value
        }


        axios.post("https://your-api.com/login", userData)
            .then((res) => {

                if (res.data.success) {


                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    setuser(res.data.user)
                    setmessage('sucess login')
                    console.log(res.data.user)
                    fristname.current.value = ''
                    lastname.current.value = ''
                    emailinput.current.value = ''
                    phoneinput.current.value = ''

                }


            })
            
            .catch((error) => {


                console.error(error);


            })
        console.log(userData)

    }

    return (
        <>
            <div className={formstyle.containerForm}>


                <form onSubmit={handelform}>
                    <h1>login</h1>
                    <p>{message}</p>
                    <div class="input-container">
                        <input placeholder='fristName' type='text' id='input' required ref={fristname}></input>


                        <input placeholder='lastName' type='text' ref={lastname} required></input>

                    </div>
                    <div>
                        <input placeholder='phone' type='number' ref={phoneinput} required></input>
                        <input placeholder='email' type='email' ref={emailinput} required></input>
                    </div>
                    <button type='submit' className={formstyle.button}>submit</button>
                </form>
            </div>


        </>
    )
}

export default Form