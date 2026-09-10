import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      {/* Landing temporal de Riddlee */}
      <Route path="/" element={<Landing />} />

      {/* Tienda actual - se mantiene intacta */}
      <Route path="/inicio" element={<Home />} />

      <Route path="/productos" element={<Products />} />

      <Route
        path="/producto/:id"
        element={<ProductDetail />}
      />
    </Routes>
  );
}

export default App;