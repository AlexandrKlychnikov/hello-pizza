import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Pizza, SearchPizzaParams } from "./types";

export const fetchMenu = createAsyncThunk<Pizza[], SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { sortBy, order, category } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://663bba31fee6744a6ea2bd7f.mockapi.io/pizzas/`,
      {
        params: {
          category,
          sortBy,
          order,
        },
      }
    );

    return data;
  }
);
