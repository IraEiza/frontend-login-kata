import { useCallback, useEffect, useState } from "react";
import "./Login.css";
import { EmailField } from "../components/EmailField.jsx";
import { PasswordField } from "../components/PasswordField.jsx";
import { Title } from "../components/Title.jsx";
import { Button } from "../components/Button.jsx";
import { translateError } from "../utils/translateError.js";

export const useAsyncError = () => {
  const [, setError] = useState();
  const useCallback1 = useCallback(
    (e) => {
      setError(() => {
        throw e;
      });
    },
    [setError],
  );
  return { propagateError: useCallback1 };
};

export const Login = ({ navigate, login }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {propagateError} = useAsyncError()

  useEffect(() => {
    setErrorMessage(null);
  }, [email, password]);

  return (
    <main className="login-container">
      <form
        className="login-form"
        onSubmit={(event) => {
          event.preventDefault();
          setIsLoading(true);
          setErrorMessage(null);

          login(email, password)
            .then(() => {throw new Error('Throat')})
            .then((payload) => {
              localStorage.setItem("token", payload.jwt);
            })
            .then(() => {
              navigate("/recipes");
            })
            .catch(propagateError)
            .finally(() => {
              setIsLoading(false);
            });
        }}
      >
        <Title>Login with email</Title>
        <p>Enter your email address to login with your account.</p>

        <EmailField
          id="email"
          labelText="Your email"
          value={email}
          onChange={setEmail}
        />
        <PasswordField
          id="password"
          labelText="Your password"
          value={password}
          onChange={setPassword}
        />
        {errorMessage && <p>{translateError(errorMessage)}</p>}
        <Button title="Login" disabled={isLoading} />
      </form>
      <button onClick={() => methodDoesNotExist()}>Break the world</button>
    </main>
  );
};
