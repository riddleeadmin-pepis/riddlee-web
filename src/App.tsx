import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/productos" element={<Products />} />

      <Route
        path="/producto/:id"
        element={<ProductDetail />}
      />
    </Routes>
  );
}

export default App;