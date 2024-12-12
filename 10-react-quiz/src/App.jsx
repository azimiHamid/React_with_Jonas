import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer": {
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    }
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer } = state;

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
    <section className="flex flex-col text-gray-300 font-poppins">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error message="oops! Something went wrong" />}
        {status === "ready" && (
          <StartScreen numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress index={index} numOfQuestions={numOfQuestions} />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <div className="flex w-full max-w-xl place-content-end">
              <NextButton dispatch={dispatch} answer={answer} />
            </div>
          </>
        )}
      </Main>
    </section>
  );
}

export default App;
