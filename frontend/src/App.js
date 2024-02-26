import "./App.css";

import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/category/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/loginsignup/LoginSignup";
import Navbar from "./Components/navbar";
import Footer from "./Section/footer";
import men_banner from "./Assets/banner_men.png";
import women_banner from "./Assets/banner_women.png";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category="men" />} />
        <Route path="/mask" element={<ShopCategory category="mask" />} />
        <Route path="/candles" element={<ShopCategory category="candles" />} />
        <Route path="/incense" element={<ShopCategory category="incense" />} />
        <Route path="/mala" element={<ShopCategory category="mala" />} />
        <Route path="/statue" element={<ShopCategory category="statue" />} />
        <Route path="/wall" element={<ShopCategory category="wall" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
