import { Avatar } from "@mui/material";

import "./userCard.css";

export function UserCard({ userInfo }) {


  return (
    <div className="userCardContainer">
      <div className="avatarContainer">
        <Avatar
          src={userInfo.imagemPerfil}
          alt={`${userInfo.nome}`}
          sx={{ width: 256, height: 256 }}
        />
      </div>
      <div className="cardTextContainer">
        <div className="apelidoContainer">
          <h1>{userInfo.nome}</h1>
          <p>{`${userInfo.apelido}`}</p>
        </div>
        <p>{`Total de curtidas : ${userInfo.numeroCurtidas}`}</p>
        <p>{`Total de amigos : ${userInfo.friendships?.length}`}</p>
        <div className="animeFavoritoContainer">
          <h1 className="animeFavoritoTitle">{`Anime favorito :`}</h1>
          <p>{userInfo.animeFavorito}</p>
        </div>
      </div>
    </div>
  );
}
