import ProductCard from "./ProductCard";
import type { Product } from "./products";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({
  products,
}: ProductGridProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">

        {products.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-20 text-center">

            <h3 className="text-2xl font-bold text-slate-700">
              No encontramos productos
            </h3>

            <p className="mt-3 text-gray-500">
              Intenta con otra búsqueda o categoría.
            </p>

          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image}
                rating={product.rating}
                isNew={product.isNew}
              />
            ))}

          </div>
        )}

      </div>
    </section>
  );
}