import { useReducer } from "react";

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
    <section className="bg-zinc-300 w-full min-h-screen flex bg-gradient-radial from-blue-300 to-transparent bg-opacity-30 backdrop-blur-lg text-center flex-col items-center font-poppins p-4">
      <h1 className="text-3xl my-5 lg:my-12 lg:text-4xl py-3 px-4 bg-amber-600 font-semibold">
        useReducer Bank Account
      </h1>

      <h4 className="text-2xl lg:text-3xl my-1 ">Balance: X</h4>
      <h4 className="text-2xl lg:text-3xl my-1 ">Loan: X</h4>

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
        onClick={() => console.log("clikced")}
        disabled={!isActive}
        className={`${
          isActive ? "" : "opacity-50 cursor-not-allowed"
        } text-xl bg-orange-900 text-gray-50 hover:bg-gray-700 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        Withdraw 50
      </button>
      <button
        onClick={() => console.log("clikced")}
        disabled={!isActive}
        className={`${
          isActive ? "" : "opacity-50 cursor-not-allowed"
        } text-xl bg-orange-900 text-gray-50 hover:bg-gray-700 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        Request a loan of 5000
      </button>
      <button
        onClick={() => console.log("clikced")}
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
    </section>
  );
}

export default BankAccount;
