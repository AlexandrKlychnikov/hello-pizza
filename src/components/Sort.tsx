import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../redux/filter/slice";
import { Sort as SortType, SortPropertyEnum } from "../redux/filter/types";
import styles from "../styles/Sort.module.sass";

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

type SortPopupProps = {
  value: SortType;
};

export const sortList: SortItem[] = [
  {
    name: "по популярности (убыв.)",
    sortProperty: SortPropertyEnum.RATING_DESC,
  },
  {
    name: "по популярности (возр.)",
    sortProperty: SortPropertyEnum.RATING_ASC,
  },
  { name: "по цене (убыв.)", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "по цене (возр.)", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "по алфавиту (убыв.)", sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: "по алфавиту (возр.)", sortProperty: SortPropertyEnum.TITLE_ASC },
];

export const Sort = ({ value }: SortPopupProps) => {
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);

  const [open, setOpen] = React.useState(false);

  const onClickListItem = (obj: SortItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className={styles.sort}>
      <div className={styles.sort__label}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#EA3323"
        >
          <path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        <b>Сортировать: </b>
        <span onClick={() => setOpen(!open)}>{value.name}</span>
      </div>
      {open && (
        <div className={styles.sort__popup}>
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={
                  styles[
                    `${value.sortProperty === obj.sortProperty ? "active" : ""}`
                  ]
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
