import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/userContext";

describe("Test on <LoginPage />", () => {
  const user = {
    id: 123,
    name: "Samuel Benjamin Campos",
    email: "s.cmelara12@gmail.com",
  };
  test("should show the component without the user ", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre"); // aria-label
    expect(preTag.innerHTML).toBe("null");
  });
  test("should call setUser when the button is clicked", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTagWOUser = screen.getByLabelText("pre"); // aria-label
    expect(preTagWOUser.innerHTML).toBe("null");

    const buttonUser = screen.getByLabelText("button-user"); // aria-label
    fireEvent.click(buttonUser);
    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});
