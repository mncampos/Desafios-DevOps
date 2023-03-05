import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../API/POST/createPost";
export function usePosting() {
  const [postContent, setPostContent] = useState({
    type: "text",
    visibility: "PUBLICO",
    content: "",
    imgUrl: "",
  });

  const navigate = useNavigate();

  const [erro, setErro] = useState("");

  function handleChange(event) {
    setPostContent({ ...postContent, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await createPost({
        conteudo: postContent.content,
        visibilidade: postContent.visibility,
        imagem: postContent.type === "text" ? null : postContent.imgUrl,
      });
      window.alert("Post criado com sucesso.");
      navigate('/dashboard');
    } catch (error) {
      setErro(error.response.data.message);
    }
  }

  return { postContent, handleChange, handleSubmit };
}
