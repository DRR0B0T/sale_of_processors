import React from 'react';
import styles from './Button.module.scss'

const Button = ({text}) => {
  return (
    <>
      <button
        type="button"
        className={`${styles.button__primary}`}>{text}</button>
    </>
  );
};

export default Button;
