import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemById } from "../redux/cart/selectors";
import { CartItem } from "../redux/cart/types";
import { addItem } from "../redux/cart/slice";
import styles from "../styles/Card.module.sass";

type CardProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  rating: number;
};

export const Card = ({ id, title, price, imageUrl }: CardProps) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.card__wrapper}>
      <div className={styles.card}>
        <Link key={id} to={`/pizza/${id}`}>
          <img className={styles.card__image} src={imageUrl} alt="Pizza" />
          <h4 className={styles.card__title}>{title}</h4>
        </Link>
        <div className={styles.card__bottom}>
          <div className={styles.card__price}>{price} ₽</div>
          <button
            onClick={onClickAdd}
            className={[
              styles.button,
              styles.button__outline,
              styles.button__add,
            ].join(" ")}
          >
            <span>В корзину</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
