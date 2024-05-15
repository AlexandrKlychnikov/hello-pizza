import React from "react";
import styles from "../styles/Footer.module.sass";
import githubLogo from "../assets/github-logo.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerText}>
          <Link
            to="https://github.com/AlexandrKlychnikov"
            target="_blank"
            style={{
              display: "flex",
              placeItems: "center",
              color: "black",
              textDecoration: "none",
            }}
          >
            <img
              src={githubLogo}
              alt="github icon"
              className={styles.githubLogo}
            />
            <p>Alexandrklychnikov</p>
          </Link>
        </div>
        <p className={styles.footerDate}>&#169; {year}</p>
      </div>
    </div>
  );
};
