import {
  Truck,
  ShieldCheck,
  MessageCircle,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Envíos a todo el Perú",
    description:
      "Realizamos envíos rápidos y seguros para que recibas tus productos donde estés.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad garantizada",
    description:
      "Seleccionamos cuidadosamente cada producto antes de ofrecerlo a nuestros clientes.",
  },
  {
    icon: MessageCircle,
    title: "Atención personalizada",
    description:
      "Estamos disponibles por WhatsApp para ayudarte antes y después de tu compra.",
  },
  {
    icon: CreditCard,
    title: "Compra segura",
    description:
      "Próximamente podrás realizar tus pagos de forma rápida y completamente segura.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            ¿Por qué elegirnos?
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Pensamos en tu experiencia
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Queremos que comprar en Riddlee sea fácil, rápido y confiable.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                  <Icon
                    size={34}
                    className="text-white"
                    strokeWidth={2.3}
                  />
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}