import React from 'react';
import styles from './Search.module.scss'
import loop from '../../assets/svg/loopa.svg'

const Search = () => {
  return (
    <div className={styles.search}>
      <input
        placeholder='Поиск бренда, товара, категории...'
        type="text"/>
      <div className={styles.loop}>
        <img src={loop} alt="loop"/>
      </div>
    </div>
  );
};

export default Search;
