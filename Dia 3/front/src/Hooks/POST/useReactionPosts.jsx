import { useEffect, useState } from "react";
import { postReaction } from "../../API/PUT/postReaction";

export function useReactionPosts(id) {
  const [reaction, setReaction] = useState();

  useEffect(() => {
    async function reactToPost() {
      try {
        await postReaction(id, reaction);
      } catch (error) {
        console.log(error);
      }
    }
    if (reaction) reactToPost();
  }, [reaction]);

  function onReactionClick(event) {
    setReaction(event.target.value);
  }

  return { reaction, onReactionClick };
}
