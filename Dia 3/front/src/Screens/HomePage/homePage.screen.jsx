import { Header } from "../../Components/components_index";
import { useNavigate } from "react-router-dom";
import { useGlobalUser } from "../../Context/useGlobalUser";
import { useEffect } from "react";
import bgImage from "../../Assets/Images/homePageBG.jpg";
import "./homePage.css";
import { Button } from "@mui/material";
export function HomePage() {
  const [user] = useGlobalUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/perfil");
  }, [navigate, user]);

  return (
    <section className="screenSection">
      <Header />
      <section className="homePageSection">
        <div className="bgImageContainer">
          <img className="bgImage" src={bgImage} alt="background" />
          <div className="homepageContent">
            <h1 className="homepageTitle">Bem vindo ao Anicrescer!</h1>
            <p className="homePageSubtitle">Ainda não tem uma conta?</p>
            <Button variant="contained" href="/cadastro" color='purple' sx={{width: '180px',height: '80px', fontSize: '32px'}}>Registrar</Button>
          </div>
        </div>
      </section>
    </section>
  );
}
