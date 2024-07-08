import type { Metadata } from "next";
import Image from "next/image";

import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "GuitarLA - Nosotros",
  description: "Tienda de Guitarras",
};

export default function Page(): JSX.Element {
  return (
    <main className="contenedor">
      <h1 className="heading">Nosotros</h1>

      <div className={styles.contenido}>
        <Image
          src="/img/nosotros.jpg"
          width={1000}
          height={800}
          alt="nosotros"
        />

        <div>
          <p>
            Cras bibendum scelerisque arcu faucibus blandit. Suspendisse
            lobortis pharetra ipsum, sagittis fringilla risus lobortis vel.
            Integer ut mi ex. Nulla tincidunt mauris in lectus viverra, non
            sagittis risus molestie. Praesent suscipit convallis euismod. Sed
            risus turpis, mattis quis felis faucibus, ornare congue metus.
            Aenean in purus in risus bibendum cursus tempor ut nunc. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Duis a felis tempus,
            aliquam dolor bibendum, volutpat arcu.
          </p>

          <p>
            Pellentesque pellentesque vulputate molestie. Donec varius, elit sed
            dictum pellentesque, dolor neque ullamcorper tortor, ac ullamcorper
            risus risus ut tellus. Suspendisse mattis interdum viverra. Sed
            rhoncus luctus rhoncus. Pellentesque pellentesque venenatis
            bibendum. Duis aliquet facilisis felis. Curabitur gravida nibh eget
            turpis semper, fermentum faucibus lectus iaculis. Maecenas id enim a
            eros facilisis aliquet sit amet vel urna.
          </p>
        </div>
      </div>
    </main>
  );
}
