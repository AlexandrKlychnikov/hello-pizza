import React from "react";
import styles from "../styles/NotFound.module.sass";

export const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Упс... Ничего не нашли похожего
      </h1>
      <p className={styles.description}>
        К сожалени данная страница отсутствует на нашем сайте
      </p>
    </div>
  );
};
