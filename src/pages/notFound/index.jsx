import React from 'react';
import styles from './NotFound.module.scss'
import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>You have landed on a non-existent page</h1>
      <Link to='/'>
        <button>
          go back
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
