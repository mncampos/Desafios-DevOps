import { useLogin } from "../../Hooks/AUTH/useLogin.hook";
import { Header, LoginForm } from "../../Components/components_index.js";
import { useGlobalUser } from "../../Context/useGlobalUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import './loginScreen.css'
export function LoginScreen() {
  const { handleLogin, userCredentials, handleChange, error } = useLogin();
  const [user] = useGlobalUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [navigate, user]);

  return (
    <section className="loginScreenSection">
      <Header />
      <LoginForm
        onSubmit={handleLogin}
        handleChange={handleChange}
        erro={error}
        userCredentials={userCredentials}
      />
    </section>
  );
}
