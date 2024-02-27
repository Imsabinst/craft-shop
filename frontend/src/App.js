import "./App.css";

import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/category/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/loginsignup/LoginSignup";
import Navbar from "./Components/navbar";
import Footer from "./Section/footer";
import banner from "./Assets/banner1.png";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/men"
          element={<ShopCategory banner={banner} category="men" />}
        />
        <Route
          path="/mask"
          element={<ShopCategory banner={banner} category="mask" />}
        />
        <Route
          path="/candles"
          element={<ShopCategory banner={banner} category="candles" />}
        />
        <Route
          path="/incense"
          element={<ShopCategory banner={banner} category="incense" />}
        />
        <Route
          path="/mala"
          element={<ShopCategory banner={banner} category="mala" />}
        />
        <Route
          path="/statue"
          element={<ShopCategory banner={banner} category="statue" />}
        />
        <Route
          path="/wall"
          element={<ShopCategory banner={banner} category="wall" />}
        />
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
