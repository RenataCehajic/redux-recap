// src/store/account/actions.js
export const deposit = (amountToDeposit) => ({
  type: "account/deposit",
  payload: amountToDeposit,
});

export const withdraw = (amountToWithdraw) => ({
  type: "account/withdraw",
  payload: amountToWithdraw,
});

export const reset = (amountToReset) => ({
  type: "account/reset",
  payload: amountToReset,
});
