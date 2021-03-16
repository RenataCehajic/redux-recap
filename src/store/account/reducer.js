// src/store/balance/reducer.js
const initialState = {
  amount: 0,
};

export default function reducer(state = initialState, action) {
  console.log("State", state);
  switch (action.type) {
    case "account/deposit": {
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    }
    case "account/withdraw": {
      return {
        ...state,
        amount: state.amount - action.payload,
      };
    }
    case "account/reset": {
      return {
        ...state,
        amount: initialState.amount,
      };
    }
    default: {
      return state;
    }
  }
}
