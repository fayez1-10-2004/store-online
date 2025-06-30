import React, { useContext } from 'react';
import { ContextAuth } from '../../../Context/ContextAuth';
import styles from './Profile.module.css';

function Profile() {
  const { user, logout } = useContext(ContextAuth);

  if (!user) return null;

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileTitle}>الملف الشخصي</h1>
      <h3 className={styles.profileField}>الاسم: {user.fristname} {user.lastname}</h3>
      <h3 className={styles.profileField}>الإيميل: {user.email}</h3>
      <h3 className={styles.profileField}>رقم الجوال: {user.phone}</h3>

      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Profile;
