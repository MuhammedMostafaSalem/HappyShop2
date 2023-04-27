import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from "./Reducers/RootReducer";

const initailState = {}
const meddleware = [thunk];

const Store = createStore( RootReducer, initailState, composeWithDevTools(applyMiddleware(...meddleware)) );
export default Store;