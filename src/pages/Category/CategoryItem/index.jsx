import React from 'react';
import styles from '../Category.module.scss'
import ryzen from '../../../assets/img/Ryzen.png'
import Button from "../../../components/Button";


const CategoryItem = () => {
  return (
    <div className={styles.category__items_item}>
      <img src={ryzen} alt="Ryzen"/>
      <h3>Длинное название товара в одну строчку п...</h3>
      <div className={styles.category__items_item_price}>
        <strong>от 350 000 ₽</strong>
        <strong>450 500 ₽ <span>-10%</span></strong>
      </div>
      <Button

        text='Добавить в корзину'/>
    </div>
  );
};

export default CategoryItem;
