import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/button.sass";
import "../App.sass";

const Pizza = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
    description: string;
    weight: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://663bba31fee6744a6ea2bd7f.mockapi.io/pizzas/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы!");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza" />
      <div className="flex-column">
        <h2>{pizza.title}</h2>
        <p>
          <b>Состав:{"  "}</b>
          {pizza.description}
        </p>
        <h4>
          <b>Вес:{"  "}</b>
          {pizza.weight} гр.
        </h4>
        <h4>
          <b>Цена:{"  "}</b>
          {pizza.price} ₽
        </h4>
        <Link to="/">
          <button className="button button__outline button__add">
            <span>Назад</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pizza;
