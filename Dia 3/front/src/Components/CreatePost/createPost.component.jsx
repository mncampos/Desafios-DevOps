import "./createPost.css";
import { usePosting } from "../../Hooks/POST/usePosting.hook";
import { PostMenu } from "./PostMenu/postMenu.component";

export function CreatePost() {
  const { postContent, handleChange, handleSubmit } = usePosting();

  return (
    <div className="createPostContainer">
      <h1 className="postTitle">Criar novo post</h1>
      <div className="textAreaContainer">
        <textarea
          value={postContent.content}
          onChange={handleChange}
          className="postInput"
          spellCheck="false"
          placeholder="Escreva algo..."
          name='content'
        />
      </div>
      <PostMenu
      postContent = {postContent}
      handleChange= {handleChange}
      handleSubmit={handleSubmit}
      />
    </div>
  );
}
