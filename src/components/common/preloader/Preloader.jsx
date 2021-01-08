import React from "react";
import styles from "./Preloader.module.css";
import loading from "../../../assets/images/lading.svg";

let Preloader = (props) => {
  return (
    <div className={styles.loading}><img src={loading} alt="" /></div>
  )
};
export default Preloader