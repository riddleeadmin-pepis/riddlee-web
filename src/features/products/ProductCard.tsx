import { Link } from "react-router-dom";

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  isNew: boolean;
};

export default function ProductCard({
  id,
  name,
  price,
  category,
  image,
  rating,
  isNew,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Imagen */}
      <div className="relative flex h-56 items-center justify-center bg-slate-100">

        {isNew && (
          <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
            Nuevo
          </span>
        )}

        <div className="text-7xl transition group-hover:scale-110">
          {image}
        </div>

      </div>

      {/* Información */}
      <div className="space-y-3 p-5">

        <span className="text-sm text-blue-600">
          {category}
        </span>

        <h3 className="text-xl font-bold text-slate-900">
          {name}
        </h3>

        <div className="text-yellow-400">
          {"⭐".repeat(rating)}
        </div>

        <p className="text-2xl font-bold text-blue-600">
          S/ {price.toFixed(2)}
        </p>

        <Link
          to={`/producto/${id}`}
          className="mt-3 block w-full rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
        >
          Ver detalle
        </Link>

      </div>

    </div>
  );
}