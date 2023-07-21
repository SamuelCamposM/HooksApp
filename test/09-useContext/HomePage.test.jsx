import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/userContext";

describe("Test on <HomePage />", () => {
  const user = {
    id: 123,
    name: "Samuel Benjamin Campos",
    email: "s.cmelara12@gmail.com",
  };
  test("should show the component without the user ", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();
    const preTag = screen.getByLabelText("pre"); // aria-label
    expect(preTag.innerHTML).toBe("null");
  });
  test("should show the component with the user ", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();
    const preTag = screen.getByLabelText("pre"); // aria-label
    expect(JSON.parse(preTag.innerHTML)).toEqual(user);
  });
});
