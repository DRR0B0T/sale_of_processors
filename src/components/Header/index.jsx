import React from 'react';
import styles from './Header.module.scss'
import {Link} from "react-router-dom";
import Search from '../Search'
import pin from '../../assets/svg/Pin.svg'
import basket from '../../assets/svg/FullBasket.svg'
import user from '../../assets/img/User.png'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>
        React
      </h1>
      <Link to='#'>
        <img src={pin} alt="pin"/>
        <span>Александровск-Са...</span>
      </Link>
      <div className={styles.search__block}>
      <Search/>
        <img
          className={styles.basket}
          src={basket} alt="basket"/>
        <img
          className={styles.user}
          src={user} alt="user"/>
      </div>
    </div>
  );
};

export default Header;
