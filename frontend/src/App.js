import { Routes, Route } from "react-router-dom";
import "./App.css";

import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/category/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/loginsignup/LoginSignup";
import Navbar from "./Components/navbar";
import Footer from "./Section/footer";
import men_banner from "./Assets/banner_men.png";
import women_banner from "./Assets/banner_women.png";
import kids_banner from "./Assets/banner_kids.png";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCategory banner={men_banner} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kids_banner} category="kid" />}
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
