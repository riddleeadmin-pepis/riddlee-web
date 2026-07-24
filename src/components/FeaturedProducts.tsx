const products = [
  {
    id: 1,
    name: "Lentes Black Premium",
    price: "S/ 79.90",
    image: "🕶️",
  },
  {
    id: 2,
    name: "Collar Elegance",
    price: "S/ 49.90",
    image: "📿",
  },
  {
    id: 3,
    name: "Polo Oversize",
    price: "S/ 69.90",
    image: "👕",
  },
  {
    id: 4,
    name: "Reloj Classic",
    price: "S/ 129.90",
    image: "⌚",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Productos
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Productos destacados
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Una selección de algunos de nuestros productos favoritos.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-60 items-center justify-center bg-gray-100 text-7xl">
                {product.image}
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-slate-800">
                  {product.name}
                </h3>

                <p className="mt-2 text-2xl font-bold text-blue-600">
                  {product.price}
                </p>

                <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Ver producto
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}