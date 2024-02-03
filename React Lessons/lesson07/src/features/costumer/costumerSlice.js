const initialStateCostumer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

export default function costumerReducer(state = initialStateCostumer, action) {
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

    default:
      return state;
  }
}

// ! action creators for costumer

export function createCustumer(fullName, nationalID) {
  return {
    type: "costumer/createCustumer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return {
    type: "costumer/updateName",
    payload: fullName,
  };
}
