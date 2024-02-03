import { createStore, combineReducers } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCostumer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function costumerReducer(state = initialStateCostumer, action) {
  switch (action.type) {
    case "costumer/createCustumer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "costumer/updateName":
      return { ...state, fullName: action.payload };
  }
}

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

// ! root reducer

const rootReducer = combineReducers({
  account: accountReducer,
  costumer: costumerReducer,
});

console.log(rootReducer);

// const store = createStore(accountReducer);

// console.log(store.getState());

// store.dispatch({ type: "account/deposit", payload: 1000 });
// console.log(store.getState());

// store.dispatch({ type: "account/withdraw", payload: 100 });
// console.log(store.getState());

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 2000, purpose: "velosiped aliram" },
// });
// console.log(store.getState());

// store.dispatch({ type: "account/payLoan" });
// console.log(store.getState());

// ! action creators

function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

function payLoan() {
  return { type: "account/payLoan" };
}

// console.log(store.getState());
// store.dispatch(deposit(10000));
// console.log(store.getState());

// store.dispatch(withdraw(200));
// console.log(store.getState());

// store.dispatch(requestLoan(10000, "ev alacam"));
// console.log(store.getState());

// store.dispatch(payLoan());
// console.log(store.getState());

// ! action creators for costumer

function createCustumer(fullName, nationalID) {
  return {
    type: "costumer/createCustumer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return {
    type: "costumer/updateName",
    payload: fullName,
  };
}
