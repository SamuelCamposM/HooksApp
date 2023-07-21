import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Test on todoReducer", () => {
  const initalState = [
    {
      id: 1,
      desc: "Hacer cosplay",
      done: false,
    },
  ];
  test("should return initial state", () => {
    const newState = todoReducer(initalState, {});
    console.log({ newState, initalState });
    expect(newState).toBe(initalState);
  });

  test("should add a todo", () => {
    const action = {
      type: "[TODO] add Todo",
      payload: {
        id: 2,
        desc: "Make a calendar with React",
        done: false,
      },
    };

    const newState = todoReducer(initalState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });
  test("should remove a todo", () => {
    const action = {
      type: "[TODO] remove Todo",
      payload: 1,
    };

    const newState = todoReducer(initalState, action);
    console.log(newState.length);
    expect(newState.length).toBe(0);
  });
  test("should make the Toggle todo", () => {
    const action = {
      type: "[TODO] toggle Todo",
      payload: 1,
    };

    const newState = todoReducer(initalState, action);
    expect(newState[0]).toEqual({ ...initalState[0], done: true });
    
    const newState2 = todoReducer(newState, action);
    expect(newState2[0]).toEqual({ ...initalState[0], done: false });
  });
});
