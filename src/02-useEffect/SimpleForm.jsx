import { useEffect, useState } from "react";
import Message from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Lotus",
    email: "s.cmelara12@gmail.com",
  });
  const { username, email } = formState;
  const onInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    // console.log("useEffect called");
  }, []);
  useEffect(() => {
    // console.log("formState changed");
  }, [formState]);
  useEffect(() => {
    // console.log("email changed");
  }, [email]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="samuel@test.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "Lotus2" && <Message />}
    </>
  );
};

export default SimpleForm;
