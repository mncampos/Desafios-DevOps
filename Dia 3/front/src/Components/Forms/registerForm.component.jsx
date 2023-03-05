import { Button } from "@mui/material";
import './forms.css'
export function RegisterForm({ onSubmit, userRequest, handleChange, erro }) {
  return (
    <section className="formSection">
      <form className="formContainer" onSubmit={onSubmit}>
        <div className="formInputContainer">
          <label className="formInputLabel textLabel">E-mail</label>
          <input
            className="formInput textInput"
            type="text"
            placeholder="Insira seu e-mail"
            value={userRequest.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="formInputContainer">
          <label className="formInputLabel textLabel">Senha</label>
          <input
            className="formInput passwordInput"
            type="password"
            placeholder="Insira sua senha"
            value={userRequest.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="formInputContainer">
          <label className="formInputLabel textLabel">Nome</label>
          <input
            className="formInput textInput"
            type="text"
            placeholder="Insira seu nome e sobrenome"
            value={userRequest.nome}
            onChange={handleChange}
            name="nome"
          />
        </div>
        <div className="formInputContainer">
          <label className="formInputLabel textLabel">Apelido</label>
          <input
            className="formInput textInput"
            type="text"
            placeholder="Insira seu nome e sobrenome"
            value={userRequest.apelido}
            onChange={handleChange}
            name="apelido"
          />
        </div>
        <div className="formInputContainer">
          <label className="formInputLabel textLabel">Imagem de perfil</label>
          <input
            className="formInput textInput"
            type="text"
            placeholder="Insira URL contendo sua imagem de perfil"
            value={userRequest.imagemPerfil}
            onChange={handleChange}
            name="imagemPerfil"
          />
        </div>
        <div className="formInputContainer">
          <label className="formInputLabel textLabel">Data de Nascimento</label>
          <input
            className="formInput dateInput"
            type="date"
            placeholder="Insira seu nome e sobrenome"
            value={userRequest.dataNascimento}
            onChange={handleChange}
            name="dataNascimento"
          />
        </div>
        <p className="errorMsg">{erro}</p>
        <Button type="submit" variant="contained">
          Cadastrar
        </Button>
      </form>
    </section>
  );
}
