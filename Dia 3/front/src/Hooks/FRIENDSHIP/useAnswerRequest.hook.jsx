import { useState } from "react";
import { answerFriendship } from "../../API/PUT/answerFriendship";

export function useAnswerRequest() {
  const [erro, setErro] = useState("");

  async function handleAnswer(id, answer, refreshTrigger) {
    try {
      await answerFriendship(id, answer);
      refreshTrigger(true);
    } catch (error) {
      setErro(error.response.data.message);
    }
  }

  return { erro, handleAnswer };
}
