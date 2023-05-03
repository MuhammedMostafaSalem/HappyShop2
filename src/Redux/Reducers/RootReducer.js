import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";
import SubCategoryReducer from "./SubCategoryReducer";

export default combineReducers({
    AllCategory: CategoryReducer,
    AllBrand: BrandReducer,
    SubCategory: SubCategoryReducer
})