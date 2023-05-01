import { combineReducers } from "redux";
import CategoryReducer from "./CategoryReducer";
import BrandReducer from "./BrandReducer";

export default combineReducers({
    AllCategory: CategoryReducer,
    AllBrand: BrandReducer
})