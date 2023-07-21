import useCounter from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>
        Counter With Hook: {counter}
        <hr />
        <button className="btn btn-primary" onClick={() => increment()}>
          +1
        </button>
        <button className="btn btn-primary" onClick={() => reset()}>
          Reset
        </button>
        <button className="btn btn-primary" onClick={() => decrement()}>
          -1
        </button>
      </h1>
    </>
  );
};

export default CounterWithCustomHook;
