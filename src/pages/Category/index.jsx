import React from 'react';
import styles from './Category.module.scss'
import Button from '../../components/Button'
import CategoryItem from './CategoryItem'

const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles.category__header}>
        <h2>Категории товаров</h2>
        <span>Настройки</span>
      </div>
      <div className={styles.buttonsContainer}>
        <Button text='Игрушка' />
        <Button changeStyle='outlined' text='Мартышка' />
        <Button backgrounder='#FFA601' text='Мишка' />
        <Button backgrounder='#FF2D87' text='Подарок' />
        <Button backgrounder='#FFA601' text='Подарок коллегам' />
        <Button
          border='1px solid #FF2D87'
          color='#2D2D2F'
          backgrounder='#FFF'
          text='День рождения Гриши' />
      </div>
      <div className={styles.category__items}>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
      <div>
        <Button text="Показать больше товаров"/>
      </div>

    </div>
  );
};

export default Category;
