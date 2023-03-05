import { Avatar } from "@mui/material";

import "./smallUserCard.css";

export function SmallUserCard({ userInfo }) {


  return (
    <div className="smallUserCardContainer">
      <div className="avatarContainer">
        <Avatar
          src={userInfo.imagemPerfil}
          alt={`${userInfo.nome}`}
          sx={{ width: 128, height: 128 }}
        />
      </div>
      <div className="cardTextContainer">
        <div className="smallApelidoContainer">
          <a className='userProfielLink'href={`/perfil/${userInfo.id}`}>{userInfo.nome}</a>
        </div>
        <div className="animeFavoritoContainer">
          <h1 className="animeFavoritoTitle">{`Anime favorito :`}</h1>
          <p>{userInfo.animeFavorito}</p>
        </div>
      </div>
    </div>
  );
}
