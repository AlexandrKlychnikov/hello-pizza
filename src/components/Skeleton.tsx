import React from "react";
import ContentLoader from "react-content-loader";
import styles from "../styles/Card.module.sass";

export const Skeleton = () => (
  <ContentLoader
    className={styles.card}
    speed={5}
    width={280}
    height={300}
    viewBox="0 0 280 400"
    backgroundColor="#e6e4e4"
    foregroundColor="#e6e4e4"
  >
    <circle cx="134" cy="136" r="125" />
    <rect x="0" y="279" rx="10" ry="10" width="280" height="20" />
    <rect x="0" y="326" rx="10" ry="10" width="280" height="30" />
    <rect x="0" y="436" rx="10" ry="10" width="50" height="20" />
  </ContentLoader>
);
