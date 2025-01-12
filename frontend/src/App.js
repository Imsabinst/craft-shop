import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Context/auth"; // Assuming you have an auth context
import ShopCategory from "./Pages/category/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/loginsignup/LoginSignup";
import banner from "./Assets/banner1.png";
import Footer from "./Components/ui/footer";
import ProductPage from "./Pages/products/ProductPage";
import HomePage from "./Pages/home/HomePage";
import UserProfile from "./Pages/user-profile/UserProfile";
import AboutUs from "./features/about-us/AboutUs";
import ContactUs from "./features/contact-us/ContactUs";
import Navbar from "./Components/navbar/Navbar";
import CategoryMenu from "./Components/category-menu/CategoryMenu";
import EditProfile from "./Pages/user-profile/EditProfile";

function App() {
  const [auth] = useAuth(); // Get auth state (e.g., { user, token })
  const location = useLocation(); // Get the current route

  // Protected Route Component
  const ProtectedRoute = ({ element: Component, ...rest }) => {
    return auth?.user ? Component : <Navigate to="/login" replace />;
  };

  // Check if the current route is a login or register page
  const hideCategoryMenuRoutes = ["/login", "/contact-us", "/about-us"];
  const shouldShowCategoryMenu = !hideCategoryMenuRoutes.includes(
    location.pathname
  );

  return (
    <>
      <Navbar />
      {shouldShowCategoryMenu && <CategoryMenu />}
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
