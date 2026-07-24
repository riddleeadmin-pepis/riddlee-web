export default function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Clientes felices",
    },
    {
      number: "100+",
      title: "Productos",
    },
    {
      number: "24/7",
      title: "Atención",
    },
    {
      number: "Perú",
      title: "Envíos nacionales",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h2 className="text-5xl font-extrabold text-blue-600">
                {item.number}
              </h2>

              <p className="mt-4 text-lg font-medium text-gray-600">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}