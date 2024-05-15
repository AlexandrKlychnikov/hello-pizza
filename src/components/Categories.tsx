import React from "react";
import styles from "../styles/Categories.module.sass";

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ["Все", "Мясные", "Морепродукты", "Вегетарианские"];

export const Categories = React.memo(
  ({ value, onChangeCategory }: CategoriesProps) => {
    return (
      <div className={styles.categories}>
        <ul>
          {categories.map((categoryName, i) => (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? `${styles.active}` : ""}
            >
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
