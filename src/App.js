import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, reset } from "./store/account/actions";
import { selectAccountValue } from "./store/account/selectors";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();

  const balance = useSelector(selectAccountValue);
  const [customAmount, setCustomAmount] = useState(0);

  // const [balance, setBalance] = useState(0);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          // setBalance(balance + 10);
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <button
        onClick={() => {
          // setBalance(balance + 10);
          dispatch(withdraw(10));
        }}
      >
        Withdraw 10$
      </button>
      <button
        onClick={() => {
          // setBalance(balance + 10);
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <br />
      <br />
      <input
        type="number"
        value={customAmount}
        onChange={(e) => {
          setCustomAmount(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          // setBalance(balance + 10);
          dispatch(deposit(customAmount));
          setCustomAmount(0);
        }}
      >
        Deposit custom amount
      </button>
    </div>
  );
}

export default App;
