import { getProduct } from "@/utils";

import { ShoppingCart } from "@/components";
import { type Product } from "@/types";

export default async function Page({
  params,
}: {
  params: { url: string };
}): Promise<JSX.Element> {
  const product: Product = await getProduct(params.url);

  if (Array.isArray(product) && product.length > 0) {
    // Verifica que product sea un array no vacío antes de acceder a sus propiedades
    return (
      <ShoppingCart
        attributes={product[0].attributes}
        id={product[0].id}
        key={product[0].id}
      />
    );
  } else {
    // Manejar el caso en el que product no es un array o está vacío
    return <div>No se encontró el producto</div>;
  }
}
