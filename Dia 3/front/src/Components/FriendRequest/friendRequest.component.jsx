import { Avatar, IconButton } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import "./friendRequest.css";
import { useAnswerRequest } from "../../Hooks/FRIENDSHIP/useAnswerRequest.hook";
export function FriendRequest({ friendshipRequest, setUpdate }) {
  const {  handleAnswer } = useAnswerRequest();

  return (
    <div className="friendRequestContainer">
      <Avatar
        src={friendshipRequest.imagemPerfil}
        alt={`${friendshipRequest.nome}`}
        sx={{ width: 82, height: 82 }}
      />
      <div className="requestTextContainer">
        <h1 className="friendshipRequester">{friendshipRequest.nome}</h1>
        <p className="apelidoRequester">{friendshipRequest.apelido}</p>
      </div>
      <div className="answerButtons">
        <IconButton
          aria-label="confirmar"
          color="success"
          onClick={() => handleAnswer(friendshipRequest.id, "ACEITAR", setUpdate)}
        >
          <ThumbUpAltIcon />
        </IconButton>
        <IconButton
          aria-label="rejeitar"
          color="error"
          onClick={() => handleAnswer(friendshipRequest.id, "REJEITAR", setUpdate)}
        >
          <ThumbDownIcon />
        </IconButton>
      </div>
    </div>
  );
}
