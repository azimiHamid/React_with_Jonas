import { useReducer } from "react";
import Main from "./Main";


// openAccount: false,
//     deposit,
//     withdraw,
//     requestLoan,
//     payLoan,
//     closeAccount

const initialState = { isActive: false, balance: 0, loan: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "isActive":
      return { ...state, isActive: true };
    case "closeAccount":
      return { ...state, isActive: false };

    default:
      throw new Error("Unknown Action");
  }
}

function BankAccount() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isActive } = state;
  console.log(isActive);

  return (
    <Main>
      <h1 className="text-3xl my-5 lg:my-12 lg:text-4xl py-3 px-4 bg-amber-600 font-semibold">
        useReducer Bank Account
      </h1>

      <h4 className="text-2xl lg:text-3xl my-1">Balance: X</h4>
      <h4 className="text-2xl lg:text-3xl my-1">Loan: X</h4>

      <button
        onClick={() => dispatch({ type: "isActive" })}
        disabled={isActive}
        className={`${
          isActive ? "opacity-50 cursor-not-allowed" : ""
        } text-xl bg-green-700 text-gray-50 hover:bg-gray-700 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        Open Account
      </button>
      <button
        onClick={() => console.log("Deposit")}
        disabled={!isActive}
        className={`${
          isActive ? "" : "opacity-50 cursor-not-allowed"
        } text-xl bg-orange-900 text-gray-50 hover:bg-gray-700 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        Deposit 150
      </button>
      <button
        onClick={() => console.log("Withdraw")}
        disabled={!isActive}
        className={`${
          isActive ? "" : "opacity-50 cursor-not-allowed"
        } text-xl bg-orange-900 text-gray-50 hover:bg-gray-700 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        Withdraw 50
      </button>
      <button
        onClick={() => console.log("Request a loan")}
        disabled={!isActive}
        className={`${
          isActive ? "" : "opacity-50 cursor-not-allowed"
        } text-xl bg-orange-900 text-gray-50 hover:bg-gray-700 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        Request a loan of 5000
      </button>
      <button
        onClick={() => console.log("Pay loan")}
        disabled={!isActive}
        className={`${
          isActive ? "" : "opacity-50 cursor-not-allowed"
        } text-xl bg-orange-900 text-gray-50 hover:bg-gray-700 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        Pay loan
      </button>
      <button
        onClick={() => dispatch({ type: "closeAccount" })}
        disabled={!isActive}
        className={`${
          isActive ? "" : "opacity-50 cursor-not-allowed"
        } text-xl bg-red-500 text-gray-900 hover:bg-gray-300 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        🔒 Close Account
      </button>
    </Main>
  );
}

export default BankAccount;
