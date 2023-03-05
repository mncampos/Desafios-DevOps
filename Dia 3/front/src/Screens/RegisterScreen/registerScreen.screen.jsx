import { Header, RegisterForm } from "../../Components/components_index.js";
import { useRegister } from "../../Hooks/AUTH/useRegister.hook";
import './registerScreen.css'
export function RegisterScreen() {
  const { error, userRequest, handleChange, handleRegister } = useRegister();

  return (
    <section className="registerScreenSection">
      <Header />
      <RegisterForm
        onSubmit={handleRegister}
        handleChange={handleChange}
        erro={error}
        userRequest={userRequest}
      />
    </section>
  );
}
