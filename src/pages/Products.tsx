import Header from "../components/Header";

import SearchBar from "../features/products/SearchBar";
import ProductFilters from "../features/products/ProductFilters";
import ProductGrid from "../features/products/ProductGrid";

import useProducts from "../hooks/useProducts";

export default function Products() {
  const {
    search,
    setSearch,
    category,
    setCategory,
    filteredProducts,
  } = useProducts();

  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-600">
            Catálogo
          </span>

          <h1 className="mt-6 text-6xl font-extrabold text-slate-900">
            Nuestros productos
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
            Explora nuestra colección de productos.
          </p>

        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-6 text-3xl font-bold text-red-600">
        
          </h2>

          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <div className="mt-6">
            <ProductFilters
              selected={category}
              onSelect={setCategory}
            />
          </div>

        </div>
      </section>

      <ProductGrid
        products={filteredProducts}
      />
    </>
  );
}