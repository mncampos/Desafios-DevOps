import { Avatar, Button, MenuItem, Select } from "@mui/material";
import { parseDate } from "../../Utils/parseDate";
import { useComment } from "../../Hooks/POST/useComment.hook";
import "./postCard.css";
import { useReactionPosts } from "../../Hooks/POST/useReactionPosts";
import { ReactionButtons } from "../components_index";
import { CommentCard } from "../CommentCard/commentCard.component";
import SendIcon from "@mui/icons-material/Send";
import { useGlobalUser } from "../../Context/useGlobalUser";
import { useChangeVisibility } from "../../Hooks/POST/useChangeVisibility.hook";

export function PostCard({ post, trigger }) {
  const { date, time } = parseDate(post.dataPostada);
  const { reaction, onReactionClick } = useReactionPosts(post.id);
  const { erro, handleChange, handleSubmit, commentContent } = useComment(
    post.id,
    trigger
  );

  const { visibility, handleVisibilityChange } = useChangeVisibility(
    post.id,
    post.visibilidade
  );

  const [user] = useGlobalUser();

  return (
    <div className="postCardContainer">
      <div className="postCardContent">
        <div className="postCardTitle">
          <Avatar
            src={post.fotoAutor}
            alt={post.autor}
            sx={{ width: 64, height: 64 }}
          />
          <h1 className="postCardTitleText">{`Post ${post.visibilidade} por ${post.apelido} em ${date}, às ${time} horas`}</h1>
        </div>
        <div className="postCardText">
          {post.imagem ? (
            <img className="postImg" src={post.imagem} alt="imagem do post" />
          ) : null}
          <p className="postContentText">{post.conteudo}</p>
        </div>

        <div className="postCardFooter">
          {post.autor === user.nome ? (
            <div className="changeVisibility">
              <Select
                value={visibility}
                onChange={handleVisibilityChange}
                sx={{
                  color: "black",
                  border: "1px solid white",
                  background: "white",
                  width: 150,
                  height: 40,
                }}
              >
                <MenuItem value={"PUBLICO"}>Público</MenuItem>
                <MenuItem value={"PRIVADO"}>Privado</MenuItem>
              </Select>
            </div>
          ) : null}
          <ReactionButtons
            reaction={reaction}
            onReactionClick={onReactionClick}
          />
        </div>
      </div>
      <div className="postCardComments">
        <div className="commentsTitle">
          <h1 className="commentsTitleText">Comentários</h1>
        </div>
        <div className="comments">
          {post.comentarios.map((comentario, index) => {
            return (
              <CommentCard
                commentData={comentario}
                key={index}
                postId={post.id}
              />
            );
          })}
        </div>
        <div className="commentInput">
          <p className="errorMsg">{erro}</p>
          <input
            className="commentTextInput"
            type="text"
            placeholder="Insira um comentário"
            name="conteudo"
            value={commentContent.conteudo}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            startIcon={<SendIcon />}
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  );
}
