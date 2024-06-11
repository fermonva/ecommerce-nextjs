import { type Cart } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: Cart[] = (() => {
  if (typeof localStorage === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("cart") ?? "[]");
  } catch (error) {
    console.error("Error parsing cart from localStorage:", error);
  }
})();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    agregarCarrito(state, action: PayloadAction<Cart>) {
      const itemInCart = state.find(
        (product) => product.id === action.payload.id,
      );
      if (itemInCart !== undefined) {
        itemInCart.cantidad += action.payload.cantidad;
      } else {
        state.push(action.payload);
      }
    },
    incrementarCantidad(state, action: PayloadAction<number>) {
      const idProduct = action.payload;
      const itemInCart = state.find((product) => product.id === idProduct);
      if (itemInCart !== undefined) {
        itemInCart.cantidad++;
      }
    },
    decrementoCantidad(state, action: PayloadAction<number>) {
      const idProduct = action.payload;
      const itemInCart = state.find((product) => product.id === idProduct);

      if (itemInCart !== undefined) {
        itemInCart.cantidad--;
        if (itemInCart.cantidad <= 0) {
          const itemIndex = state.findIndex(
            (product) => product.id === idProduct,
          );

          if (itemIndex > -1) {
            state.splice(itemIndex, 1);
          }
        }
      }
      return state;
    },
    eliminarProducto(state, action: PayloadAction<number>) {
      const idProduct = action.payload;
      return state.filter((product) => product.id !== idProduct);
    },
    actualizarCarrito(state, action: PayloadAction<Cart>) {},
  },
});

export const {
  agregarCarrito,
  incrementarCantidad,
  decrementoCantidad,
  eliminarProducto,
  actualizarCarrito,
} = cartSlice.actions;

export default cartSlice.reducer;
