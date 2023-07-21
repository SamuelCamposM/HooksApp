import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodo } from "../../src/hooks/useTodo";

jest.mock("../../src/hooks/useTodo");

describe("Test on <TodoApp />", () => {
  useTodo.mockReturnValue({
    todos: [
      { id: 1, desc: "todo #1", done: false },
      { id: 2, desc: "todo #2", done: true },
    ],
    onNewTodo: jest.fn(),
    onDeleteTodo: jest.fn(),
    onToggleTodo: jest.fn(),
    todosCount: 2,
    pendingTodosCount: 1,
  });
  test("should show the component", () => {
    render(<TodoApp />);
    screen.debug();
    expect(screen.getByText("todo #1")).toBeTruthy();
    expect(screen.getByText("todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
