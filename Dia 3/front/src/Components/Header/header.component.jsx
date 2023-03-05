import { Avatar, Button } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { useLocation } from "react-router-dom";
import { useGlobalUser } from "../../Context/useGlobalUser";
import { Logo } from "./Logo/logo.component";
import "./header.css";

export function Header() {
  const pages = [
    {
      name: "Perfil",
      path: "/perfil",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Buscar contatos",
      path: "/buscar",
    },
    {
      name: "Meus amigos",
      path: "/amigos",
    },
  ];

  const noUserPages = [
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Cadastro",
      path: "/cadastro",
    },
  ];

  const { pathname } = useLocation();
  const [user] = useGlobalUser();

  return (
    <header className="appHeader">
      <div className="leftHeader">
        <Logo />

        {user
          ? pages.map((page, index) => {
              return (
                <Button
                  key={index}
                  size="large"
                  href={page.path}
                  color={pathname === page.path ? "purple" : "light"}
                  sx={{fontSize: '18px',':hover' : {bgcolor: "lightgrey", color: "black"}}}
                >
                  {page.name}
                </Button>
              );
            })
          : noUserPages.map((page, index) => {
              return (
                <Button
                  key={index}
                  size="large"
                  href={page.path}
                  color={pathname === page.path ? "purple" : "light"}
                  sx={{':hover' : {bgcolor: "lightgrey", color: "black"}}}
                  
                >
                  {page.name}
                </Button>
              );
            })}
      </div>
      {user ? (
        <div className="rightHeader">
          <Avatar
            sx={{ bgcolor: blueGrey, width: 64, height: 64 }}
            alt={`${user.apelido}`}
            src={user.imagemPerfil}
          />
          <Button
            size="large"
            href="/logout"
            color="purple"
            sx={{':hover' : {bgcolor: "lightgrey", color: "black"}}}
          >
            Logout
          </Button>
        </div>
      ) : null}
    </header>
  );
}
