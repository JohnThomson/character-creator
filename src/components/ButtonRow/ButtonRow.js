import React from 'react';

import styles from './ButtonRow.module.css';

const ButtonRow = ({ children }) => {
  return <div className={styles.buttonRow}>
    <div className={styles.buttonRowScroller}>{children}</div></div>;
};

export default ButtonRow;
