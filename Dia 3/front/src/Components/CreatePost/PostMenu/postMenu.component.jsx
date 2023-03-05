import SendIcon from "@mui/icons-material/Send";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";

export function PostMenu({ postContent, handleChange, handleSubmit }) {
  return (
    <div className="postTypeContainer">
      <div className="postTypeButtons">
        <ToggleButtonGroup
          value={postContent.type}
          onChange={handleChange}
          exclusive
        >
          <ToggleButton name="type" value="text">
            Apenas Texto
          </ToggleButton>
          <ToggleButton name="type" value="image">
            Post com imagem
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {postContent.type === "image" ? (
        <input
          type="text"
          placeholder="URL imagem"
          value={postContent.imgUrl}
          onChange={handleChange}
          name="imgUrl"
        />
      ) : null}

      <div className="postVisibilityButtons">
        <ToggleButtonGroup
          value={postContent.visibility}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton name="visibility" value="PUBLICO">
            Publico
          </ToggleButton>
          <ToggleButton name="visibility" value="PRIVADO">
            Privado
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="sendButton">
        <Button
          variant="contained"
          onClick={handleSubmit}
          startIcon={<SendIcon />}
        >
          Criar
        </Button>
      </div>
    </div>
  );
}
