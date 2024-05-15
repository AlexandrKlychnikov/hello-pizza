export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  weight: number;
  description: string;
  rating: number;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "completed",
  ERROR = "error",
}

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
