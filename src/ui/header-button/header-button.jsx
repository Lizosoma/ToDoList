import React from 'react';
import Tooltip from '../tooltip';
import styles from './header-button.module.css';

const HeaderButton = ({ onClick, img, alt }) => {
  return (
    <Tooltip text={alt}>
      <button className={styles.button} onClick={onClick}>
        <img className={styles.img} src={img} alt={alt} />
      </button>
    </Tooltip>
  );
};

export default HeaderButton;
