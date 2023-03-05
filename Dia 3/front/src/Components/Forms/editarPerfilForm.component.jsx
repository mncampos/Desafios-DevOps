import { Button } from "@mui/material";

export function EditarPerfilForm({ onSubmit, userProfile, handleChange, erro }) {
  return (
    <section className="formSection">
      <form className="formContainer" onSubmit={onSubmit}>
        <div className="formInputContainer">
          <label className="formInputLabel textLabel">Nome</label>
          <input
            className="formInput textInput"
            type="text"
            placeholder="Insira o nome"
            value={userProfile.nome}
            onChange={handleChange}
            name='nome'
          />
        </div>
        <div className="formInputContainer">
          <label className="formInputLabel textLabel">Apelido</label>
          <input
            className="formInput textInput"
            type="text"
            placeholder="Insira seu apelido"
            value={userProfile.apelido}
            onChange={handleChange}
            name='apelido'
          />
        </div>
        <div className="formInputContainer">
          <label className="formInputLabel textLabel">URL Imagem de perfil</label>
          <input
            className="formInput textInput"
            type="text"
            placeholder="Insira URL com imagem"
            value={userProfile.imagemPerfil}
            onChange={handleChange}
            name='imagemPerfil'
          />
        </div>
        <div className="formInputContainer">
          <label className="formInputLabel textLabel">Anime favorito</label>
          <input
            className="formInput textInput"
            type="text"
            placeholder="Insira seu anime favorito"
            value={userProfile.animeFavorito}
            onChange={handleChange}
            name='animeFavorito'
          />
        </div>
        <Button type='submit' variant="contained">Editar</Button>
      </form>
    </section>
  );
}
