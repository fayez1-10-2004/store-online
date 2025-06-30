import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ContextAuth } from '../../../Context/ContextAuth';
import styles from './Login.module.css'; // استدعاء الملف هنا

function Login() {
  const navgate =useNavigate()
  const { login } = useContext(ContextAuth);
 
  const [pass, setpass] = useState('');
  const [phone, setphone] = useState('');

  const handelsubmit = (e) => {
    e.preventDefault();
  

    if(  login( phone,pass)){
    navgate('/Home')
  }


};

  return (
    <form onSubmit={handelsubmit} className={styles.formContainer}>
      <h2>Login Form</h2>
       <input
        type='text'
        placeholder='Phone'
        className={styles.inputField}
        value={phone}
        onChange={(e) => setphone(e.target.value)}
      />
      <input
        type='password'
        placeholder='password'
        className={styles.inputField}
        value={pass}
        onChange={(e) => setpass(e.target.value)}
      />
    
      <button type='submit' className={styles.submitButton} >Login</button>
      <button type='button' className={styles.submitButton} onClick={()=>navgate('/Register')}>register</button>
    </form>
  );
}

export default Login;
