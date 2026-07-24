import { useMemo, useState } from "react";
import { products } from "../features/products/products";

export default function useProducts() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "Todos" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    filteredProducts,
  };
}