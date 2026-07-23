function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Bienvenido a Riddlee
        </h1>

        <p className="mt-4 text-xl text-gray-600">
          Tu tienda online de lentes, accesorios y moda.
        </p>

        <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition">
          Ver productos
        </button>
      </div>
    </section>
  );
}

export default Home;