import { renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks";
import { act } from "react-dom/test-utils";

describe("Test on useForm", () => {
  const initialForm = {
    name: "Samuel Campos",
    email: "s.cmelara12@gmail.com",
  };
  test("should return default values", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
  test("should change the name of the form", () => {
    const e = {
      target: {
        value: "Name changed",
        name: "name",
      },
    };
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange(e);
    });
    expect(result.current.name).toBe(e.target.value);
    expect(result.current.formState.name).toBe(e.target.value);
  });
  test("should change the name of the form", () => {
    const e = {
      target: {
        value: "Name changed",
        name: "name",
      },
    };
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    act(() => {
      onInputChange(e);

      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
