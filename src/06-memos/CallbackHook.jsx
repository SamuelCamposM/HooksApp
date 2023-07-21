import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setcounter] = useState(10);
  //   const increment = () => {
  //     setcounter(counter + 1);
  //   };
  const incrementFather = useCallback((value) => {
    setcounter((prev) => prev + value);
  }, []);

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
