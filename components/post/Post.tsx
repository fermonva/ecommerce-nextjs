import type { Posts } from "@/types";
import { formatearFecha } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import styles from "./styles.module.css";

export const Post: FC<Posts> = ({ attributes }): JSX.Element => {
  const { title, url, content, img, publishedAt } = attributes;
  return (
    <article>
      <Image
        src={img.data.attributes.formats.medium.url}
        alt={title}
        width={600}
        height={400}
      />
      <div className={styles.contenido}>
        <h3>{title}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{content}</p>
        <Link className={styles.enlace} href={`/post/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
};
