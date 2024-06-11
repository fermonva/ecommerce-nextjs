import { Card } from "@/components";
import { getProducts } from "@/utils";
import { type Metadata } from "next";

import { type Product } from "@/types";

import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "GuitarLA - Tienda Virtual",
  description: "Tienda virtual, venta de guitarras, instrumentos",
  keywords: ["guitarras, venta, instrumentos, tienda"],
};

export default async function Page(): Promise<JSX.Element> {
  const products: Product[] = await getProducts();

  return (
    <main className="contenedor">
      <h1 className="heading">Tienda</h1>

      <div className={styles.grid}>
        {products?.map((product: Product) => (
          <Card key={product.id} attributes={product.attributes} id={0} />
        ))}
      </div>
    </main>
  );
}
