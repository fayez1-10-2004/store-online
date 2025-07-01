import React, { useContext } from 'react';
import { ContextAuth } from '../../../Context/ContextAuth';
import { useNavigate } from 'react-router';
import styles from './Profile.module.css';

function Profile() {
  const { user, logout } = useContext(ContextAuth);
const navgate=useNavigate()

  return (
    
    <div className={styles.profileContainer}>

{
  user?(

    <>
     <h1 className={styles.profileTitle}>الملف الشخصي</h1>
      <h3 className={styles.profileField}> {user.fristname} {user.lastname}</h3>
      <h3 className={styles.profileField}> {user.email}</h3>
      <h3 className={styles.profileField}> {user.phone}</h3>
      <button className={styles.logoutButton} onClick={()=>{
        logout()
        window.location.reload()
      }}>logout</button>
    
    </>
  ):(
    
    <button className={styles.logoutButton} onClick={()=>navgate('/login')}>login</button>
    
  )
     
}
    </div>
  );
}

export default Profile;
