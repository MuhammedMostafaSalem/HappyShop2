import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarLogin from "./Components/Uitily/NavBarLogin";
import Footer from "./Components/Uitily/Footer";
import LoginPage from './Page/Auth/LoginPage';
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
import ProductDetalisPage from "./Page/Products/ProductDetalisPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethoudPage from "./Page/Checkout/ChoosePayMethoudPage";
import AdminAllProductsPage from "./Page/Admin/AdminAllProductsPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage";
import AdminOrderDetalisPage from "./Page/Admin/AdminOrderDetalisPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddProductsPage from "./Page/Admin/AdminAddProductsPage";
import UserAllOrdersPage from "./Page/User/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Page/User/UserFavoriteProductsPage";
import UserAllAddresPage from './Page/User/UserAllAddresPage';
import UserAddAddressPage from './Page/User/UserAddAddressPage';
import UserEditAddressPage from './Page/User/UserEditAddressPage';
import UserProfilePage from "./Page/User/UserProfilePage";
import AdminEditProductPage from "./Page/Admin/AdminEditProductPage";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./Page/Auth/VerifyPasswordPage";
import ResetPasswordPage from "./Page/Auth/ResetPasswordPage";
import AdminAddCouponPage from "./Page/Admin/AdminAddCouponPage";
import AdminAllCouponsPage from "./Page/Admin/AdminAllCouponsPage";
import AdminEditCouponPage from "./Page/Admin/AdminEditCouponPage";
import ProtectedRoutesHook from "./Routes/ProtectedRoutesHook";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import ProductsByCategoryPage from "./Page/Products/ProductsByCategoryPage";
import ProductsByBrandPage from "./Page/Products/ProductsByBrandPage";

function App() {
  const [userData, isUser, isAdmin] = ProtectedRoutesHook();
  console.log(userData)
  console.log(isUser)
  console.log(isAdmin)
  
  return (
    <div className="font" >
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/verify-code" element={<VerifyPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/products/category/:id" element={<ProductsByCategoryPage />} />
          <Route path="/products/brand/:id" element={<ProductsByBrandPage />} />

          <Route element={<ProtectedRoutes auth={isAdmin}/>}>
            <Route path="/admin/allproducts" element={<AdminAllProductsPage />} />
            <Route path="/admin/allorders" element={<AdminAllOrdersPage />} />
            <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
            <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
            <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
            <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
            <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
            <Route path="/admin/edit-product/:id" element={<AdminEditProductPage />} />
            <Route path="/admin/addcoupon" element={<AdminAddCouponPage />} />
            <Route path="/admin/allcoupons" element={<AdminAllCouponsPage />} />
            <Route path="/admin/editcoupon/:id" element={<AdminEditCouponPage />} />
          </Route>

          <Route element={<ProtectedRoutes auth={isUser}/>}>
            <Route path="/user/allorders" element={<UserAllOrdersPage />} />
            <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
            <Route path="/user/addresses" element={<UserAllAddresPage />} />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route path="/user/edit-address/:id" element={<UserEditAddressPage />} />  
            <Route path="/user/profile" element={<UserProfilePage />} />  
            <Route path="/cart" element={<CartPage />} />
          </Route>

          <Route path="/order/paymethoud" element={
            <ProtectedRoutes auth={isUser}>
              <ChoosePayMethoudPage />
            </ProtectedRoutes>
          } />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
