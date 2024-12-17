/* eslint-disable react/prop-types */
import { useReducer } from "react";
import Main from "./Main";

const BALANCE_AMOUNT = 500;
const DEPOSIT_AMOUNT = 150;
const WITHDRAW_AMOUNT = 50;
const LOAN_AMOUNT = 5000;

const initialState = {
  isActive: false,
  balance: 0,
  loan: 0,
  showAlertType: null,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: true, balance: BALANCE_AMOUNT };
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        showAlertType: null,
      };
    case "withdraw":
      return {
        ...state,
        balance: Math.max(0, state.balance - action.payload),
      };
    case "requestLoan":
      if (state.loan > 0) {
        // User already has a loan, do nothing
        return state;
      }
      return {
        ...state,
        balance: state.balance + action.payload,
        loan: action.payload,
      };
    case "payLoan":
      if (state.balance < state.loan) {
        return { ...state, showAlertType: "loanNotPaid" };
      }
      return { ...state, balance: state.balance - state.loan, loan: 0 };

    case "closeAccount":
      if (state.balance === 0 && state.loan === 0) {
        return { ...state, isActive: false };
      }
      return { ...state, showAlertType: "accountNotClosed" };

    case "closeAlertBox":
      return { ...state, showAlertType: null };

    default:
      throw new Error("Unknown Action");
  }
}

function BankAccount() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isActive, balance, loan, showAlertType } = state;
  console.log(isActive);

  return (
    <Main>
      <h1 className="text-3xl my-5 lg:my-12 lg:text-4xl py-3 px-4 bg-amber-600 font-semibold">
        useReducer Bank Account
      </h1>

      <h4 className="text-2xl lg:text-3xl my-1">Balance: {balance}</h4>
      <h4 className="text-2xl lg:text-3xl my-1">Loan: {loan}</h4>

      <button
        onClick={() => dispatch({ type: "openAccount" })}
        disabled={isActive}
        className={`${
          isActive ? "opacity-40 cursor-not-allowed" : ""
        } text-xl bg-green-700 text-gray-50 hover:bg-gray-700 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        Open Account
      </button>
      <button
        onClick={() => dispatch({ type: "deposit", payload: DEPOSIT_AMOUNT })}
        disabled={!isActive}
        className={`${
          isActive ? "" : "opacity-40 cursor-not-allowed"
        } text-xl bg-orange-900 text-gray-50 hover:bg-gray-700 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        Deposit {DEPOSIT_AMOUNT}$
      </button>
      <button
        onClick={() => dispatch({ type: "withdraw", payload: WITHDRAW_AMOUNT })}
        disabled={!isActive || balance <= 0}
        className={`${
          isActive ? "" : "opacity-40 cursor-not-allowed"
        } text-xl bg-orange-900 text-gray-50 hover:bg-gray-700 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        Withdraw {WITHDRAW_AMOUNT}$
      </button>
      <button
        onClick={() => dispatch({ type: "requestLoan", payload: LOAN_AMOUNT })}
        disabled={!isActive || loan > 0}
        className={`${
          isActive && loan === 0 ? "" : "opacity-40 cursor-not-allowed"
        } text-xl bg-orange-900 text-gray-50 hover:bg-gray-700 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        Request a loan of {LOAN_AMOUNT}$
      </button>
      <button
        onClick={() => dispatch({ type: "payLoan" })}
        disabled={!isActive || loan === 0}
        className={`${
          isActive && loan > 0 ? "" : "opacity-40 cursor-not-allowed"
        } text-xl bg-orange-900 text-gray-50 hover:bg-gray-700 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        Pay loan
      </button>
      <button
        onClick={() => dispatch({ type: "closeAccount" })}
        disabled={!isActive}
        className={`${
          isActive ? "" : "opacity-40 cursor-not-allowed"
        } text-xl bg-red-500 text-gray-900 hover:bg-gray-300 active:scale-95 transition-all duration-300 px-5 py-1 my-1 rounded-3xl`}
      >
        🔒 Close Account
      </button>

      {showAlertType && (
        <AlertModel
          message={
            showAlertType === "loanNotPaid"
              ? "You do not have enough balance to pay off the loan"
              : "You can close your account only when you withdraw all the money"
          }
          loan={loan}
          balance={balance}
          dispatch={dispatch}
          alertType={showAlertType}
        />
      )}
    </Main>
  );
}

function AlertModel({ message, loan, balance, dispatch, alertType }) {
  const remaining = loan - balance;

  if (alertType === "loanNotPaid") {
    return (
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 text-center bg-[#353535] rounded-lg shadow-lg"
        role="alert"
        aria-live="assertive"
      >
        <h1 className="text-3xl font-bold text-red-600 mb-4">Alert!</h1>
        <p className="text-lg text-gray-100">
          {message}
          {", "}you should deposit {remaining}$
        </p>

        <div className="flex gap-3 items-center justify-center">
          <FinalBtn dispatch={dispatch} remaining={remaining} />
          <DismissBtn dispatch={dispatch} />
        </div>
      </div>
    );
  } else if (alertType === "accountNotClosed") {
    return (
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 text-center bg-[#353535] rounded-lg shadow-lg"
        role="alert"
      >
        <h1 className="text-3xl font-bold text-red-600 mb-4">Alert!</h1>
        <p className="text-lg text-gray-100">{message}</p>

        <div className="flex items-center justify-center">
          <DismissBtn dispatch={dispatch} />
        </div>
      </div>
    );
  }
}

function DismissBtn({ dispatch }) {
  return (
    <button
      onClick={() => dispatch({ type: "closeAlertBox" })}
      className="mt-4 px-4 py-2 text-white rounded bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-400"
      aria-label="Dismiss error message"
    >
      Dismiss
    </button>
  );
}

function FinalBtn({ dispatch, remaining }) {
  return (
    <button
      onClick={() => dispatch({ type: "deposit", payload: remaining })}
      className="mt-4 px-4 py-2 text-white rounded bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-400"
      aria-label="Resolve issue"
    >
      Deposit {remaining}$
    </button>
  );
}

export default BankAccount;
