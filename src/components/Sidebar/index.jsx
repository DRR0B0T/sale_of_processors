import React from 'react';
import styles from './Sidebar.module.scss'
import bag from '../../assets/img/Packets.png'
import Button from '../Button'


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        <img src={bag} alt="bag"/>
        <h3>Получай товары БЕСПЛАТНО!</h3>
        <Button text='Узнать подробнее'/>

      </div>
    </div>
  );
};

export default Sidebar;
