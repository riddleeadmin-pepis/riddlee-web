import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600 transition hover:text-blue-700">
            Riddlee PRUEBA
          </h1>
        </Link>

        {/* Menú escritorio */}
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

        {/* Lado derecho */}
        <div className="flex items-center gap-3">

          {/* Botón escritorio */}
          <button className="hidden rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700 md:block">
            Ingresar
          </button>

          {/* Botón menú móvil */}
          <button
            className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="border-t border-gray-200 bg-white md:hidden">

          <div className="flex flex-col px-6 py-4">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="py-3 font-medium"
            >
              Inicio
            </Link>

            <Link
              to="/productos"
              onClick={() => setMenuOpen(false)}
              className="py-3 font-medium"
            >
              Productos
            </Link>

            <Link
              to="#"
              onClick={() => setMenuOpen(false)}
              className="py-3 font-medium"
            >
              Categorías
            </Link>

            <Link
              to="#"
              onClick={() => setMenuOpen(false)}
              className="py-3 font-medium"
            >
              Contacto
            </Link>

            <button className="mt-4 rounded-lg bg-blue-600 py-3 font-medium text-white">
              Ingresar
            </button>

          </div>

        </nav>
      )}

    </header>
  );
}