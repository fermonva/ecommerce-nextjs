import { type Product } from "@/types";
import { formatearPrecio } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

import styles from "./styles.module.css";

export const Card: FC<Product> = ({ attributes }): JSX.Element => {
  const { content, name, price, img, url } = attributes;

  const imgProduct =
    img.data.attributes.formats.medium?.url !== undefined
      ? img.data.attributes.formats.medium.url
      : img.data.attributes.formats.small.url;

  return (
    <div className={styles.card}>
      <Image src={imgProduct} alt={name} width={300} height={300} />
      <div className={styles.contenido}>
        <h3>{name}</h3>
        <p className={styles.content}>{content}</p>
        <p className={styles.price}>{formatearPrecio(price)}</p>
        <Link className={styles.link} href={`/product/${url}`}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
};
