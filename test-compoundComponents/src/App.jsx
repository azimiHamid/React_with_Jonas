import Counter from "./Counter";

function App() {
  return (
    <section className="app">
      <h1>Compound Component Pattern</h1>

      {/* Example of using Counter with props (less flexible) */}
      {/* 
      <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> 
      */}

      {/* Using the Compound Component Pattern for greater flexibility */}
      {/* Each counter can be customized independently with different layouts, styles, and elements */}

      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>
      <br />

      {/* Another counter with a different structure */}
      <Counter>
        <Counter.Decrease icon="⏮️" />
        <div>
          <Counter.Count />
        </div>
        <Counter.Increase icon="⏭️" />
      </Counter>
      <br />

      {/* A styled counter inside an article element */}
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
