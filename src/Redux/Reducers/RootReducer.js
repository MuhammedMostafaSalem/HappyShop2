import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import SubCategoryReducer from "./SubCategoryReducer";
import ProductReducer from "./ProductReducer";
import AuthReducer from "./AuthReducer";
import RateReducer from "./RateReducer";
import WishListReducer from "./WishListReducer";
import CouponReducer from "./CouponReducer";
import UserAddressReducer from "./UserAddressReducer";
import ProfileReducer from "./ProfileReducer";
import CartReducer from "./CartReducer";
import CheckOutCashReducer from "./CheckOutCashReducer";

export default combineReducers({
    AllCategory: CategoryReducer,
    AllBrand: BrandReducer,
    SubCategory: SubCategoryReducer,
    ProductReducer: ProductReducer,
    AuthReducer: AuthReducer,
    RateReducer: RateReducer,
    WishListReducer: WishListReducer,
    CouponReducer: CouponReducer,
    UserAddressReducer: UserAddressReducer,
    ProfileReducer: ProfileReducer,
    CartReducer: CartReducer,
    CheckOutCashReducer: CheckOutCashReducer,
})