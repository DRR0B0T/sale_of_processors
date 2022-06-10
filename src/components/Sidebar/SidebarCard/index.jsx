import React from 'react';
import styles from '../Sidebar.module.scss'
import chocolate from '../../../assets/img/chocolate.png'

const SidebarCard = () => {
  return (
    <div className={styles.sidebar__cards_card}>
      <img src={chocolate} alt="chocolate"/>
      <h3>Новая коллекция</h3>
    </div>
  );
};

export default SidebarCard;
