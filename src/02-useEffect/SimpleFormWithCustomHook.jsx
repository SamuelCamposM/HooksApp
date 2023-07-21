import useForm from "../hooks/useForm";
export const SimpleFormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState;
  return (
    <>
      <h1>Form With Custom Hook</h1>
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary" onClick={onResetForm}>
        Reset
      </button>
    </>
  );
};

export default SimpleFormWithCustomHook;
