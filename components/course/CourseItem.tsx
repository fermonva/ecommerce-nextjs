"use client";
import type { Course } from "@/types";
import type { FC } from "react";

import styles from "./styles.module.css";

export const CourseItem: FC<Course> = ({
  attributes: { content, title, img },
}: Course): JSX.Element => {
  return (
    <section className={`${styles.curso} curso`}>
      <style jsx>
        {`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${img.data.attributes.url});
          }
        `}
      </style>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className="heading">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </section>
  );
};
