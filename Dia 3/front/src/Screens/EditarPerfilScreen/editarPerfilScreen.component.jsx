import { EditarPerfilForm } from "../../Components/Forms/editarPerfilForm.component";
import { Header } from "../../Components/Header/header.component";
import { useEditProfile } from "../../Hooks/USERS/useEditProfile.hook";

import './editarPerfil.css'
export function EditarPerfilScreen() {
  const { handleSubmit, handleChange, userProfile, erro } = useEditProfile();

  return (
    <section className="editarSection">
      <Header />
      <EditarPerfilForm
        handleChange={handleChange}
        onSubmit={handleSubmit}
        userProfile={userProfile}
        erro={erro}
      />
    </section>
  );
}
