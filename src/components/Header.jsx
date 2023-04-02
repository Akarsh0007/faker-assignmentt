import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/zethic-full-logo.jpg'
import styles from '../styles/header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="zethic" width={70} height={20} />
      <div>
        <span className={styles.item}><Link to="/">List 1</Link></span>
        <span className={styles.item}><Link to="/chart/bar/user-country">Bar Chart 1</Link></span>
        <span className={styles.item}><Link to="/chart/pie/model-maker">Pie Chart 1</Link></span>
        <span className={styles.item}><Link to="/chart/pie/vehicle-age">Pie Chart 2</Link></span>
        <span className={styles.item}><Link to="/chart/bar/user-age">Bar Chart 2</Link></span>
      </div>
    </div>
  )
}
