import React from 'react';
import styles from './Header.module.scss'
import {Link} from "react-router-dom";

import pin from '../../assets/svg/Pin.svg'

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
      <input type="text"/>
    </div>
  );
};

export default Header;
