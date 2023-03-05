import { useEffect, useState } from "react";
import { commentReaction } from "../../API/PUT/commentReaction";

export function useReactionComment(id, numlikes) {
  const [reaction, setReaction] = useState();
  const [commentNumber, setCommentNumber] = useState(numlikes);

  useEffect(() => {
    async function reactToComment() {
      try {
        await commentReaction(id, reaction);
        reaction === "curtir"
          ? setCommentNumber(numlikes + 1)
          : setCommentNumber(numlikes - 1);
      } catch (error) {
        console.log(error);
      }
    }
    if (reaction) reactToComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reaction]);

  function onReactionClick(event) {
    setReaction(event.target.value);
  }

  return { reaction, onReactionClick, commentNumber };
}
