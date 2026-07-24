import { useParams } from "react-router-dom";

import Header from "../components/Header";
import { products } from "../features/products/products";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <>
        <Header />

        <section className="py-24 text-center">
          <h1 className="text-4xl font-bold">
            Producto no encontrado
          </h1>
        </section>
      </>
    );
  }

  const whatsappNumber = "51977568897";

  const message = encodeURIComponent(
    `Hola 👋

Estoy interesado en este producto:

*${product.name}*

💰 Precio: S/ ${product.price.toFixed(2)}

¿Podrían brindarme más información?`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <>
      <Header />

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">

          {/* Imagen */}
          <div className="flex h-[500px] items-center justify-center rounded-3xl bg-white shadow-sm">
            <span className="text-9xl">
              {product.image}
            </span>
          </div>

          {/* Información */}
          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              {product.category}
            </span>

            <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
              {product.name}
            </h1>

            <div className="mt-5 text-2xl text-yellow-500">
              {"⭐".repeat(product.rating)}
            </div>

            <p className="mt-6 text-4xl font-bold text-blue-600">
              S/ {product.price.toFixed(2)}
            </p>

            <p className="mt-8 leading-8 text-gray-600">
              Próximamente este producto contará con una descripción completa.
            </p>

            <div className="mt-10 space-y-4">

              <div>
                <span className="font-bold">
                  Categoría:
                </span>{" "}
                {product.category}
              </div>

              <div>
                <span className="font-bold">
                  Código:
                </span>{" "}
                #{product.id}
              </div>

              <div>
                <span className="font-bold">
                  Estado:
                </span>{" "}
                Disponible
              </div>

            </div>

            <button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="mt-10 w-full rounded-2xl bg-green-600 py-4 text-lg font-bold text-white transition hover:bg-green-700"
            >
              Comprar por WhatsApp
            </button>

          </div>

        </div>
      </section>
    </>
  );
}