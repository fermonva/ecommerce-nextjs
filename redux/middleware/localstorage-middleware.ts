import {
  type Action,
  type Dispatch,
  type MiddlewareAPI,
} from "@reduxjs/toolkit";

export const localStorageMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    next(action);
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
    console.log(action);
  };
