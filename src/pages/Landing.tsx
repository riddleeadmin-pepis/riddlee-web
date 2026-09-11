import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import TopographicBackground from "../components/TopographicBackground";
import logoRiddlee from "../assets/riddlee-logo.png";

export default function Landing() {
  const whatsappNumber = "51912624115";

  const whatsappMessage =
    "Hola Riddlee 👋 Vi sus productos y quisiera recibir información.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const facebookUrl = "https://www.facebook.com/people/Riddlee/61594093507641/";
  const instagramUrl = "https://www.instagram.com/riddlee.store/";
  const tiktokUrl = "https://www.tiktok.com/@riddlee.store";

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Fondo animado */}
      <TopographicBackground />

      {/* Contenido principal */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <section className="flex flex-1 items-center justify-center px-5 py-10 sm:px-8">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            {/* Logo */}
            <img
              src={logoRiddlee}
              alt="Riddlee"
              className="mb-4 w-52 sm:w-56 md:w-60"
            />

            {/* Etiqueta */}
            <div className="mb-5 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="text-xs font-semibold tracking-[0.35em] text-white/80 sm:text-sm">
                MUY PRONTO
              </span>
            </div>

            {/* Título */}
            <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Estamos preparando nuestra tienda online
            </h1>

            {/* Descripción */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Mientras terminamos nuestra nueva experiencia de compra, puedes
              conocer nuestros productos y realizar tus pedidos directamente
              por WhatsApp.
            </p>

            {/* Envíos */}
            <p className="mt-5 text-sm font-medium text-white/80 sm:text-base">
              🚚 Envíos a Lima y a todo el Perú
            </p>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full max-w-sm items-center justify-center gap-3 rounded-2xl bg-green-500 px-6 py-4 text-base font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-green-600 active:scale-[0.98]"
            >
              <FaWhatsapp className="text-2xl" />
              Comprar por WhatsApp
            </a>

            {/* Redes sociales */}
            <div className="mt-9">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-white/40">
                Síguenos
              </p>

              <div className="flex items-center justify-center gap-6">
                {/* Facebook */}
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Riddlee"
                  title="Facebook"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white/80 transition duration-300 hover:scale-110 hover:border-white/35 hover:bg-white/10 hover:text-white"
                >
                  <FaFacebookF />
                </a>

                {/* Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Riddlee"
                  title="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white/80 transition duration-300 hover:scale-110 hover:border-white/35 hover:bg-white/10 hover:text-white"
                >
                  <FaInstagram />
                </a>

                {/* TikTok */}
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok de Riddlee"
                  title="TikTok"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white/80 transition duration-300 hover:scale-110 hover:border-white/35 hover:bg-white/10 hover:text-white"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 px-5 pb-6 text-center">
          <p className="text-xs text-white/30">
            © 2026 Riddlee. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}