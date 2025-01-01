import { useReducer } from "react";

function formatDay(d) {
  switch (d) {
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
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";

    default:
      break;
  }
}

const initialState = { step: 1, count: 0 };
function reducer(state, action) {
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

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, count } = state;

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleCountChange = function (e) {
    const val = e.target.value;
    if (val === "" || val === "-" || !isNaN(val))
      dispatch({ type: "setCount", payload: val === "" ? 0 : Number(val) });
  };

  const handleStepChange = function (e) {
    const val = e.target.value;
    if (!isNaN(val) && Number(val) >= 1)
      dispatch({ type: "setStep", payload: Number(val) });
  };

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
            onClick={() => dispatch({ type: "dec" })}
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
            onClick={() => dispatch({ type: "inc" })}
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
          onClick={() => dispatch({ type: "reset" })}
          className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default Counter;
