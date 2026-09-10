import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

import TopographicBackground from "../components/TopographicBackground";
import logoRiddlee from "../assets/riddlee-logo.png";

export default function Landing() {
  // Número oficial de WhatsApp Business de Riddlee.
  // Formato: código de país + número, sin +, espacios ni guiones.
  const whatsappNumber = "51912624115";

  const whatsappMessage =
    "Hola Riddlee 👋 Vi sus productos y quisiera recibir información.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <TopographicBackground />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-8 sm:px-6 sm:py-12">
        <div className="w-full max-w-4xl text-center">

          <div className="mb-5 flex justify-center sm:mb-6">
            <img
              src={logoRiddlee}
              alt="Riddlee"
              className="w-52 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] sm:w-56 md:w-60"
            />
          </div>

          <p className="mb-4 text-sm uppercase tracking-[0.42em] text-gray-400 sm:mb-5 sm:text-sm">
            Muy pronto
          </p>

          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Estamos preparando nuestra tienda online
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-300 sm:mt-6 sm:text-lg">
            Mientras terminamos nuestra nueva experiencia de compra,
            puedes conocer nuestros productos y realizar tus pedidos
            directamente por WhatsApp.
          </p>

          <p className="mt-5 text-base text-gray-300 sm:text-base">
            🚚 Envíos a Lima y a todo el Perú
          </p>

          <div className="mt-8 sm:mt-9">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full bg-green-500 px-7 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-green-600 sm:w-auto sm:px-8"
            >
              <FaWhatsapp className="text-2xl" />
              Comprar por WhatsApp
            </a>
          </div>

          <div className="mt-9 flex items-center justify-center gap-9 sm:mt-10">
            <a
              href="https://www.instagram.com/riddlee.store/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Riddlee"
              className="text-4xl text-gray-200 transition duration-300 hover:scale-110 hover:text-white sm:text-3xl"
            >
              <FaInstagram />
            </a>

            <span
              aria-label="TikTok de Riddlee"
              title="TikTok próximamente"
              className="cursor-default text-4xl text-gray-600 sm:text-3xl"
            >
              <FaTiktok />
            </span>
          </div>

          <p className="mt-10 text-xs text-gray-500 sm:mt-12 sm:text-sm">
            © 2026 Riddlee. Todos los derechos reservados.
          </p>

        </div>
      </section>
    </main>
  );
}