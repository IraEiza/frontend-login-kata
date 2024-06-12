import { useEffect, useState } from "react";
import "./Login.css";
import { EmailField } from "../components/EmailField.jsx";
import { PasswordField } from "../components/PasswordField.jsx";
import { Title } from "../components/Title.jsx";
import { Button } from "../components/Button.jsx";
import { translateError } from "../utils/translateError.js";
import { login } from "../services/authService.js";


export const Login = ({ navigate }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
            .then((payload) => {
              localStorage.setItem("token", payload.jwt);
            })
            .then(() => {
              navigate("/recipes");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            })
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
    </main>
  );
};
