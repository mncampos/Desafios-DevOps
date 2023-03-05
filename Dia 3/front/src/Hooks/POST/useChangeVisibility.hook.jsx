import { useState } from "react";
import { changeVisibility } from "../../API/PUT/changeVisibility";

export function useChangeVisibility(postId, postVisibility) {
  const [visibility, setVisibility] = useState(postVisibility);

  async function handleVisibilityChange(event) {
    setVisibility(event.target.value);
    await changeVisibility(postId, { visibilidade: event.target.value });
  }

  return {visibility, handleVisibilityChange}
}
