import { Avatar } from "@mui/material";
import { useReactionComment } from "../../Hooks/POST/useReactionComment";
import { parseDate } from "../../Utils/parseDate";
import { ReactionButtons } from "../reactionButtons/reactionButtons.component";
import "./commentCard.css";

export function CommentCard({commentData }) {
  const { reaction, onReactionClick, commentNumber } = useReactionComment(commentData.id, commentData.numCurtidas);
  const {date,time} = parseDate(commentData.dataComentario)

  return (
    <div className="commentContainer">
      <div className="commentHeader">
        <div className="userAvatarAndNick">
          <Avatar
            src={commentData.autor.imagemPerfil}
            alt={commentData.autor.nome}
            sx={{ width: 64, height: 64 }}
          />
          <a href={`/perfil/${commentData.idAutor}`} className="authorNickname">
            {commentData.autor.apelido}
          </a>
        </div>
        <p className="commentDate">{`${date} - ${time}`}</p>
        <p className="likeNumber">{`${commentNumber} curtidas`}</p>
      </div>
      <div className="commentContent">
        <p>{commentData.conteudo}</p>
      </div>
      <div className="reactionButtons">
        <ReactionButtons
          reaction={reaction}
          onReactionClick={onReactionClick}
        />
      </div>
    </div>
  );
}
