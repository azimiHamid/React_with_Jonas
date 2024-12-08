import { useReducer } from "react";

function formatMonth(month) {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Nov";
    case 10:
      return "Oct";
    case 11:
      return "Dec";

    default:
      break;
  }
}

function formatDay(day) {
  switch (day) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";

    default:
      break;
  }
}

const initialState = { count: 0, step: 1 };
function reducer(state, action) {
  console.log(state, action);
  // if (action.type === "inc") return state + action.paload;
  // if (action.type === "dec") return state - action.paload;
  // if (action.type === "setCount") return action.paload;

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;

    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleCountChange = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value))
  };

  const handleStepChange = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const decrement = function () {
    dispatch({ type: "dec" });
    // setCount((c) => c - step);
  };

  const increment = function () {
    dispatch({ type: "inc" });
    // setCount((c) => c + step);
  };

  function reset() {
    dispatch({ type: "reset", payload: 0 });
    // setStep(1);
    // setCount(0);
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <article className="relative flex gap-5 items-baseline">
          <input
            onChange={handleStepChange}
            value={step}
            type="range"
            min={1}
            max={100}
            className="w-full h-2 mb-4 rounded-lg appearance-auto bg-gray-200 accent-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <span className="text-sm font-medium text-gray-700">{step}</span>
        </article>

        <div className="flex items-center justify-between mb-4">
          <button
            onClick={decrement}
            className="w-10 h-10 text-white bg-blue-500 rounded-full hover:bg-blue-600"
          >
            -
          </button>
          <input
            onChange={handleCountChange}
            value={count}
            type="text"
            className="w-40 text-center border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={increment}
            className="w-10 h-10 text-white bg-blue-500 rounded-full hover:bg-blue-600"
          >
            +
          </button>
        </div>

        <p className="mb-4 text-lg font-semibold text-center text-gray-700">
          {formatDay(date.getDay())} {date.getDate()}{" "}
          {formatMonth(date.getMonth())} {date.getFullYear()}
        </p>

        <button
          onClick={reset}
          className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default DateCounter;
