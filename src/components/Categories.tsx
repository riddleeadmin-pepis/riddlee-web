const categories = [
  {
    icon: "🕶️",
    title: "Lentes",
    description: "Moda y protección para todos los estilos.",
  },
  {
    icon: "⌚",
    title: "Accesorios",
    description: "Complementa tu look con elegancia.",
  },
  {
    icon: "👕",
    title: "Polos",
    description: "Moda casual con diseños modernos.",
  },
  {
    icon: "📿",
    title: "Collares",
    description: "Detalles que marcan la diferencia.",
  },
  {
    icon: "🎁",
    title: "Importados",
    description: "Productos exclusivos seleccionados.",
  },
  {
    icon: "⭐",
    title: "Muy pronto",
    description: "Nuevas categorías llegarán pronto.",
  },
];

export default function Categories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Categorías
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Explora nuestras categorías
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Encuentra productos pensados para complementar tu estilo.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-6xl">
                {category.icon}
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-800">
                {category.title}
              </h3>

              <p className="text-gray-600">
                {category.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}