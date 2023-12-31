import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe("Test on <MainApp />", () => {
  test("should show the component HomePage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
 

    expect(screen.getByText("HomePage")).toBeTruthy();
  });
  test("should show the component LoginPage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    screen.debug();

    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
