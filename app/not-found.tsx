import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GuitarLA - Home",
  description: "Tienda de Guitarras",
};

export default function Pagina404(): JSX.Element {
  return (
    <main className="contenedor">
      <h1 className="error">Pagina no encontrada</h1>
      <Link href="/" className="error-enlace">
        Ir a inicio
      </Link>
    </main>
  );
}
