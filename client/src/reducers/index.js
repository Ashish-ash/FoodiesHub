import { combineReducers } from "redux";
import { getAllFoodsReducer } from "./getAllFoodsReducer.js";
import { cartReducer } from "./cartReducer.js";
import { registerUserReducer } from "./userReducer.js";
import { loginUserReducer } from "./userReducer.js";
import { placeOrderReducer } from "./orderReducer.js";
import { getUserOrdersReducer } from "./orderReducer.js";
import { addItemReducer } from "./getAllFoodsReducer.js";
import { getFoodReducer } from "./getAllFoodsReducer.js";
import { updateItemReducer } from "./getAllFoodsReducer.js";
import { getAllOrdersReducer } from "./orderReducer.js";
const finalReducer = combineReducers({
    getAllFoodsReducer,cartReducer,registerUserReducer,loginUserReducer,placeOrderReducer,getUserOrdersReducer,
    addItemReducer , getFoodReducer , updateItemReducer , getAllOrdersReducer
})
export default finalReducer;