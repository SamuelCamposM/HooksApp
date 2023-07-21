import { useState } from "react";

const CounterApp = () => {
  //   const [{ counter1, counter2, counter3 }, setCounter] = useState({
  // counter1: 10,
  // counter2: 20,
  // counter3: 30,
  //   });
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  const { counter1, counter2, counter3 } = state;
  return (
    <>
      <h1>Counter 1: {counter1}</h1>
      <h1>Counter 2: {counter2}</h1>
      <h1>Counter 3: {counter3}</h1>
      <hr />
      <button
        className="btn"
        onClick={() =>
          setCounter((prev) => ({ ...state, counter1: counter1 + 1 }))
        }
      >
        +1
      </button>
    </>
  );
};

export default CounterApp;
