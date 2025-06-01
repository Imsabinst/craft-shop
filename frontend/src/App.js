import { Navigate, Route, Routes } from "react-router-dom";
import banner from "./Assets/banner1.png";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/ui/footer";
import { useAuth } from "./Context/auth";
import AboutUs from "./features/about-us/AboutUs";
import ContactUs from "./features/contact-us/ContactUs";
import Cart from "./Pages/Cart";
import ShopCategory from "./Pages/category/ShopCategory";
import HomePage from "./Pages/home/HomePage";
import LoginSignup from "./Pages/loginsignup/LoginSignup";
import Product from "./Pages/Product";
import ProductPage from "./Pages/products/ProductPage";
import EditProfile from "./Pages/user-profile/EditProfile";
import UserProfile from "./Pages/user-profile/UserProfile";

function App() {
  const [auth] = useAuth(); // Get auth state (e.g., { user, token })

  // Protected Route Component
  const ProtectedRoute = ({ element: Component, ...rest }) => {
    return auth?.user ? Component : <Navigate to="/login" replace />;
  };

  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
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

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={<ProtectedRoute element={<UserProfile />} />}
        />
        <Route
          path="/edit-profile"
          element={<ProtectedRoute element={<EditProfile />} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
