/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Step 1: Create a Context to share state across Counter components
const CounterContext = createContext();

// Step 2: Define the Parent `Counter` component, which manages state
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
}

// Step 3: Create reusable child components that access the Counter's shared state

// Displays the current count
function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}

// Displays a label for the counter
function Label({ children }) {
  return <span>{children}</span>;
}

// Button to increase the count
function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}

// Button to decrease the count
function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

// Step 4: Attach child components to the parent `Counter` component
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
