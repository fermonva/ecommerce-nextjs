"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type FC } from "react";

import { useAppSelector } from "@/redux/hooks";
import styles from "./styles.module.css";

export const Header: FC = (): JSX.Element => {
  const cart = useAppSelector((state) => state.cart);
  const router: string = usePathname();

  // const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          {" "}
          <Image
            src="/img/logo.svg"
            alt="imagen logotipo"
            width={300}
            height={40}
          />
        </Link>
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

          <Link href="/cart" className={styles.carrito}>
            <Image
              src="/img/carrito.png"
              alt="imagen carrito"
              width={30}
              height={25}
            />
            {cart.length > 0 && <p className={styles.numero}>{cart.length}</p>}
          </Link>
        </nav>
      </div>
    </header>
  );
};
