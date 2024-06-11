"use client";
import { type FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./styles.module.css";

export const Footer: FC = (): JSX.Element => {
  const router: string = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link className={router === "/" ? styles.active : ""} href="/">
            Inicio
          </Link>
          <Link
            className={router === "/nosotros" ? styles.active : ""}
            href="/nosotros"
          >
            Nosotros
          </Link>
          <Link
            className={router === "/tienda" ? styles.active : ""}
            href="/tienda"
          >
            Tienda
          </Link>
          <Link
            className={router === "/blog" ? styles.active : ""}
            href="/blog"
          >
            Blog
          </Link>
        </nav>
        <p className={styles.copyright}>
          Todos los derechos reservados {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
