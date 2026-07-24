export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center gap-12 px-6 py-16 lg:flex-row">

        {/* Texto */}
        <div className="max-w-xl text-center lg:text-left">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            ✨ Moda • Estilo • Calidad
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Encuentra tu{" "}
            <span className="text-blue-600">mejor estilo</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            En Riddlee encontrarás lentes, accesorios, collares,
            polos y productos importados cuidadosamente
            seleccionados para complementar tu estilo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Ver productos
            </button>

            <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold transition hover:bg-gray-100">
              Contactar
            </button>

          </div>

        </div>

        {/* Banner temporal */}
        <div className="flex justify-center">
          <div className="flex h-96 w-96 items-center justify-center rounded-3xl bg-white shadow-2xl">

            <div className="text-center">

              <div className="text-8xl">
                🕶️
              </div>

              <p className="mt-6 text-gray-500">
                Aquí colocaremos el banner principal
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}