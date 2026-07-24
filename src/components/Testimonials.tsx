import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    city: "Lima",
    text: "Los lentes llegaron muy rápido y la calidad superó mis expectativas. Volvería a comprar sin dudarlo.",
  },
  {
    name: "José R.",
    city: "Arequipa",
    text: "Excelente atención por WhatsApp. Me ayudaron a elegir el modelo perfecto.",
  },
  {
    name: "Andrea C.",
    city: "Trujillo",
    text: "Todo llegó muy bien embalado. Los productos son exactamente como en las fotos.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            TESTIMONIOS
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Nuestros clientes nos recomiendan
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-5 flex gap-1 text-yellow-400">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>

              <p className="leading-7 text-gray-600">
                "{item.text}"
              </p>

              <div className="mt-8 border-t pt-5">

                <h3 className="font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.city}, Perú
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}