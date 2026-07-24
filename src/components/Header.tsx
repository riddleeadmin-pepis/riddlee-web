import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600 transition hover:text-blue-700">
            Riddlee
          </h1>
        </Link>

        {/* Menú */}
        <nav className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="font-medium transition hover:text-blue-600"
          >
            Inicio
          </Link>

          <Link
            to="/productos"
            className="font-medium transition hover:text-blue-600"
          >
            Productos
          </Link>

          <Link
            to="#"
            className="font-medium transition hover:text-blue-600"
          >
            Categorías
          </Link>

          <Link
            to="#"
            className="font-medium transition hover:text-blue-600"
          >
            Contacto
          </Link>

        </nav>

        {/* Botón */}
        <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700">
          Ingresar
        </button>

      </div>
    </header>
  );
}