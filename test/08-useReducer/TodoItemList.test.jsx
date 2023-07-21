import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItemList } from "../../src/08-useReducer/components/TodoItemList";

describe("Test on <TodoItemList />", () => {
  const todo = {
    id: 1,
    desciption: "Watch madoka's movie",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should show the Todo pending of complete", () => {
    render(
      <TodoItemList
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("align-slef-center");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });
  test("should show the completed Todo", () => {
    todo.done = true;
    render(
      <TodoItemList
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });
  test("Span should call Toggle Todo when is clicked ", () => {
    render(
      <TodoItemList
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });
  test("Button should call Remove Todo when is clicked ", () => {
    render(
      <TodoItemList
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
