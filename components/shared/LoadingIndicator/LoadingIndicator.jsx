import React from "react";
import styles from "./loadingIndicator.module.css";
const LoadingIndicator = () => {
  return (
    <div className={styles.ldEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingIndicator;
