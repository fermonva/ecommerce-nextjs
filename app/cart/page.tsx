"use client";
import {
  decrementoCantidad,
  incrementarCantidad,
} from "@/redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { formatearPrecio } from "@/utils/helpers";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Page(): JSX.Element {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const onIncrementQuantity = (id: number): void => {
    dispatch(incrementarCantidad(id));
  };

  const onDecrementQuantity = (id: number): void => {
    dispatch(decrementoCantidad(id));
  };

  return (
    <main className="contenedor">
      <h1 className="heading">Carrito</h1>

      <div className={styles.contenido}>
        <div className={styles.carrito}>
          <h2 className="subHeading">Productos</h2>

          {cart.length === 0
            ? "Carrito vacío"
            : cart.map((producto) => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image
                      src={producto.img}
                      alt={producto.name}
                      width={250}
                      height={480}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className={styles.nombre}>{producto.name}</p>
                    <div className={styles.cantidad}>
                      Cantidad:
                      <div className="flex items-center gap-8">
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded"
                          type="button"
                          onClick={() => {
                            onDecrementQuantity(producto.id);
                          }}
                        >
                          -
                        </button>
                        <div className={styles.cantidadInput}>
                          {producto.cantidad}
                        </div>
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 rounded"
                          type="button"
                          onClick={() => {
                            onIncrementQuantity(producto.id);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p className={styles.precio}>
                      <span>Precio: {formatearPrecio(producto.price)}</span>
                    </p>
                    <p className={styles.subtotal}>
                      <span>
                        Subtotal:{" "}
                        {formatearPrecio(producto.price * producto.cantidad)}
                      </span>
                    </p>{" "}
                  </div>
                </div>
              ))}
        </div>

        <aside className={styles.resumen}>
          <h3>Resumen del pedido</h3>
          {cart.length === 0
            ? "Carrito vacío"
            : cart.map((item) => (
                <p key={item.id}>
                  {item.name} x {item.cantidad}
                </p>
              ))}
          <p>
            Total a pagar:
            {formatearPrecio(
              cart.reduce(
                (total, item) => total + item.price * item.cantidad,
                0,
              ),
            )}
          </p>
        </aside>
      </div>
    </main>
  );
}
