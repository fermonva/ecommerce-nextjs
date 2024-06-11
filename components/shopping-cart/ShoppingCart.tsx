"use client";
import { formatearPrecio } from "@/utils/helpers";
import Image from "next/image";
import React, { useState, type FC } from "react";

import { agregarCarrito } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { type Cart, type Product } from "@/types";
import styles from "./styles.module.css";

export const ShoppingCart: FC<Product> = ({
  attributes: { content, name, price, img },
  id,
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const [cantidad, setCantidad] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (cantidad < 1) {
      alert("Debe agregar una cantidad");
    } else {
      // construir un objeto con la información
      const productoSeleccionado: Cart = {
        id,
        img: img.data.attributes.url,
        name,
        price,
        cantidad: Number(cantidad),
      };

      // enviar el objeto al store
      dispatch(agregarCarrito(productoSeleccionado));

      // limpiar el formulario
      setCantidad(0);
    }
  };

  return (
    <div className="contenedor">
      <div className={styles.card}>
        <Image
          src={img.data.attributes.url}
          alt={name}
          width={300}
          height={300}
        />
        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.content}>{content}</p>
          <p className={styles.price}>{formatearPrecio(price)}</p>

          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad:</label>
            <select
              name="cantidad"
              id="cantidad"
              defaultValue=""
              onChange={(e) => {
                setCantidad(Number(e.target.value));
              }}
            >
              <option disabled value="">
                --- Seleccione ---
              </option>
              {[1, 2, 3, 4, 5].map((cantidad: number) => (
                <option key={cantidad} value={cantidad}>
                  {cantidad}
                </option>
              ))}
            </select>

            <input
              className={styles.link}
              type="submit"
              value="Agregar al carrito"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
