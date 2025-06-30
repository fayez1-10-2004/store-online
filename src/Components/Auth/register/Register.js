import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { ContextAuth } from '../../../Context/ContextAuth';
import styles from './Register.module.css'
function Register() {
  const navgate=useNavigate()
  const{reg}=useContext(ContextAuth)
   const [fristname, setfristname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const[Pass,setpass]=useState('')


const handelsubmit=(e)=>{
    e.preventDefault();
reg(fristname,lastname,email,phone,Pass)
navgate('/login')

}


  return (


  <form onSubmit={handelsubmit} className={styles.formContainer}>
      <h2>Login Form</h2>
      <input
      required
        type='text'
        placeholder='fristnmae'
        className={styles.inputField}
        value={fristname}
        onChange={(e) => setfristname(e.target.value)}
      /><input
      required
        type='text'
        placeholder='lastname'
        className={styles.inputField}
        value={lastname}
        onChange={(e) => setlastname(e.target.value)}
      /><input
      required
        type='email'
        placeholder='email'
        className={styles.inputField}
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
       <input
       required
        type='text'
        placeholder='Phone'
        className={styles.inputField}
        value={phone}
        onChange={(e) => setphone(e.target.value)}
      />
      <input
      required
        type='password'
        placeholder='password'
        className={styles.inputField}
        value={Pass}
        onChange={(e) => setpass(e.target.value)}
      />
    
      <button type='submit' className={styles.submitButton}>login</button>
    </form>
  )
}

export default Register