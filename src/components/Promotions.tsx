export default function Promotions() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 p-12 text-white shadow-2xl">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            🔥 Promoción Especial
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            Hasta 30% de descuento
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Aprovecha nuestras ofertas en lentes seleccionados.
            Muy pronto estarán disponibles para compra online.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
            Comprar pronto
          </button>

        </div>

      </div>
    </section>
  );
}