import { createStore } from "redux";
import allReducers from "./reducers";
const storeJS = createStore(allReducers)
export default storeJS;