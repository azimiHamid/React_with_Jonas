import Counter from "./Counter";

function App() {
  return (
    <section className="app">
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}

      {/* Now we can change any part and add some more html and css to wach one of the following counters seperately */}
      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>
      <br />

      <Counter>
        <Counter.Decrease icon="⏮️" />
        <div>
          <Counter.Count />
        </div>
        <Counter.Increase icon="⏭️" />
      </Counter>
      <br />

      <article className="styled-counter">
        <Counter>
          <mark>
            <Counter.Count />
          </mark>
          <Counter.Label>Literally a flexible counter</Counter.Label>
          <Counter.Decrease icon="➖" />
          <Counter.Increase icon="➕" />
        </Counter>
      </article>
    </section>
  );
}

export default App;
