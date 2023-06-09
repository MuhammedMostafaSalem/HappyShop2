import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import SubCategoryReducer from "./SubCategoryReducer";
import ProductReducer from "./ProductReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
    AllCategory: CategoryReducer,
    AllBrand: BrandReducer,
    SubCategory: SubCategoryReducer,
    ProductReducer: ProductReducer,
    AuthReducer: AuthReducer
})