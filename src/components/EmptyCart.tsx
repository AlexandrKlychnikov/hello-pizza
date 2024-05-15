import React from "react";
import { Link } from "react-router-dom";

import cartEmptyImg from "../assets/empty-cart.svg";

export const EmptyCart = () => (
  <div className="cart cart--empty">
    <h2>
      Корзина пустая <span>😕</span>
    </h2>
    <p>
      Вы пока не заказывали ещё пиццу.
      <br />
      Чтобы заказать пиццу, перейдите в Меню.
    </p>
    <img src={cartEmptyImg} alt="Empty cart" />
    <Link to="/" className="button button--black">
      <span>Вернуться назад</span>
    </Link>
  </div>
);
