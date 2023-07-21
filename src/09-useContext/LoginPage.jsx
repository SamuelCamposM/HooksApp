import { useContext } from "react";
import { UserContext } from "./context/userContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button aria-label="button-user"
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 123,
            name: "Samuel Benjamin Campos",
            email: "s.cmelara12@gmail.com",
          })
        }
      >
        Establecer Usuario
      </button>
    </>
  );
};
