export const todoReducer = (initialState = [], { type, payload }) => {
  switch (type) {
    case "[TODO] add Todo":
      return [...initialState, payload];
    case "[TODO] remove Todo":
      return initialState.filter((item) => item.id !== payload);
    case "[TODO] toggle Todo":
      return initialState.map((item) => {
        if (item.id === payload) {
          return { ...item, done: !item.done };
        }
        return item;
      });

    default:
      return initialState;
  }
};
