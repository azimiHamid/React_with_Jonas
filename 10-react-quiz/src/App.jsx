import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };

    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status } = state;

  const numOfQuestions = questions.length;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => {
        dispatch({ type: "dataFailed" });
        console.error(err.message);
      });
  }, []);

  return (
    <section className="flex flex-col text-gray-300">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error message="oops! Something went wrong" />}
        {status === "ready" && <StartScreen numOfQuestions={numOfQuestions} />}
      </Main>
    </section>
  );
}

export default App;
