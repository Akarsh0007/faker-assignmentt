import React from 'react'
import styles from '../styles/sidebar.module.scss';

export default function Sidebar({onClose, children}) {  
  return (
     <div className={styles.sidebar_container}>
      <div onClick={onClose}>X</div>
      <div>{children}</div>
    </div>
  )
}