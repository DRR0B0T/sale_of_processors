import React from 'react';
import styles from './Button.module.scss'

const Button = ({text,  changeStyle }) => {


  return (
    <>
      <button
        type="button"
        className={`${styles}.${changeStyle}` && `${styles.button}`}>{text}</button>
    </>
  );
};

export default Button;
