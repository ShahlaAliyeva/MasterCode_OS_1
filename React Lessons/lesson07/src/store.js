import { createStore, combineReducers } from "redux";
import accountReducer from "./features/account/accountSlice";
import costumerReducer from "./features/costumer/costumerSlice";

// ! root reducer

const rootReducer = combineReducers({
  account: accountReducer,
  costumer: costumerReducer,
});

const store = createStore(rootReducer);

console.log(store.getState());

export default store;
