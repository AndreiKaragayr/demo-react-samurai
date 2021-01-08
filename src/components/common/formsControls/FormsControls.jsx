import React from "react";
import styles from './FormsControls.module.css';

export const FormsControls = ({input, meta: {touched, error}, ...props}) => {
  const hasError = touched && error;
  return (
    <div className={`${styles.root} ${hasError ? styles.error : ''}`}>
      <div>
        {props.children}
      </div>
      {hasError ? <div className={styles.message}>{error}</div> : null }
    </div>
  )
}