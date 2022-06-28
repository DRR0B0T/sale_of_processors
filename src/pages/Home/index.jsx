import React from 'react';
import styles from './Home.module.scss'
import Category from '../Category'

const Home = () => {
  return (
    <div className={styles.home}>
      <Category/>
    </div>
  );
};

export default Home;
