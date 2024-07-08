import { getPost } from "@/utils";
import { formatearFecha } from "@/utils/helpers";
import Image from "next/image";

import type { Posts } from "@/types";

import styles from "./styles.module.css";

export default async function Page({
  params,
}: {
  params: { url: string };
}): Promise<JSX.Element> {
  const post: Posts[] = await getPost(params.url);

  const { title, content, img, publishedAt } = post[0].attributes;

  return (
    <article className={`${styles.post} ${styles["mt-3"]}`}>
      <Image
        src={img.data.attributes.url}
        alt={title}
        width={1000}
        height={600}
      />
      <div className={styles.contenido}>
        <h3>{title}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.texto}>{content}</p>
      </div>
    </article>
  );
}
