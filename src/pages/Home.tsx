import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Categories } from "../components/Categories";

import { Sort } from "../components/Sort";
import { Card } from "../components/Card";

import { useAppDispatch } from "../redux/store";
import { selectFilter } from "../redux/filter/selectors";
import { selectPizzaData } from "../redux/unit/selectors";

import { setCategoryId, setCurrentPage } from "../redux/filter/slice";

import { fetchMenu } from "../redux/unit/asyncActions";
import { Paginator } from "../components/Paginator";
import { Skeleton } from "../components/Skeleton";

export const Home = () => {
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(selectPizzaData);
  const { categoryId, sort, currentPage } = useSelector(selectFilter);

  const onChangeCategory = React.useCallback(
    (idx: number) => {
      dispatch(setCategoryId(idx));
      dispatch(setCurrentPage(1));
    },
    [dispatch]
  );

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getMenu = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? String(categoryId) : "";

    dispatch(
      fetchMenu({
        sortBy,
        order,
        category,
      })
    );

    window.scrollTo(0, 0);
  };

  const CARDS_ON_PAGE = 4;

  const pizzas = items
    .slice((currentPage - 1) * CARDS_ON_PAGE, currentPage * CARDS_ON_PAGE)
    .map((obj: any) => <Card key={obj.id} {...obj} />);
  const skeletons = [...new Array(4)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const numOfPage = Math.ceil(items.length / CARDS_ON_PAGE);

  useEffect(() => {
    getMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, sort.sortProperty, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className="content__title">Меню</h2>
      {status === "error" ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>
            Пиццы, возможно, пока не готовы.
            <br />
            Повторите попытку позже.
          </p>
        </div>
      ) : (
        <div className="content__items">
          {status === "loading" ? skeletons : pizzas}
        </div>
      )}
      {items.length > 4 && (
        <Paginator
          currentPage={currentPage}
          onChangePage={onChangePage}
          pageCount={numOfPage}
        />
      )}
    </div>
  );
};

export default Home;
