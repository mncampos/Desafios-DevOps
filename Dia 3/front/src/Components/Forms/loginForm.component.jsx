import { Button } from "@mui/material";

export function LoginForm({ onSubmit, userCredentials, handleChange, erro }) {
  return (
    <section className="formSection">
      <form className="formContainer" onSubmit={onSubmit}>
        <div className="formInputContainer">
          <label className="formInputLabel textLabel">E-mail</label>
          <input
            className="formInput textInput"
            type="text"
            placeholder="Insira seu e-mail"
            value={userCredentials.email}
            onChange={handleChange}
            name='email'
          />
        </div>
        <div className="formInputContainer">
          <label className="formInputLabel textLabel">Senha</label>
          <input
            className="formInput passwordInput"
            type="password"
            placeholder="Insira sua senha"
            value={userCredentials.password}
            onChange={handleChange}
            name='password'
          />
        </div>
        <p className="errorMsg">{erro}</p>
        <Button type='submit' variant="contained">Login</Button>
      </form>
    </section>
  );
}
