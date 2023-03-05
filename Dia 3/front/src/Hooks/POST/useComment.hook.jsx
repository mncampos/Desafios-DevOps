import { useState } from "react";
import { createComment } from "../../API/PUT/createComment";
export function useComment(postId, trigger) {
  const [commentContent, setCommentContent] = useState({
    conteudo: "",
  });

  const [erro, setErro] = useState("");

  function handleChange(event) {
    setCommentContent({
      ...commentContent,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await createComment(postId, commentContent);
      window.alert("Comentário criado com sucesso.");
      trigger(true);
      setCommentContent({conteudo: ''})
      setErro('');
    } catch (error) {
      setErro(error.response.data.message);
    }
  }

  return { erro, handleChange, handleSubmit, commentContent };
}
