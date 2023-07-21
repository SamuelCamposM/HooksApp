import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import MultipleCustomHooks from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");
describe("test on <MultipleCustomHooks />", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({ counter: 1, increment: mockIncrement });
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("should show default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("BreakingBad Quotes"));
    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nextButton.disabled).toBeTruthy();
  });
  test("should show a Quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Samuel", quote: "Aguacate" }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Aguacate")).toBeTruthy();
    expect(screen.getByText("Samuel")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    expect(nextButton.disabled).toBeFalsy();
  });
  test("should call the function increment", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Samuel", quote: "Aguacate" }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Next Quote" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
