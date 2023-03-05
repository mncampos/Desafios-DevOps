import { useEffect, useState } from "react";
import { listarAmizadesPendentes } from "../../API/GET/listarAmizadesPendentes";
export function useFetchFriendRequests(trigger) {
  const [amizadesPendentes, setAmizadesPendentes] = useState();
  const [erro, setErro] = useState("");
  const [update, setUpdate] = useState(true);
  useEffect(() => {
    async function fetchAmizadesPendentes() {
      try {
        const data = await listarAmizadesPendentes();
        setAmizadesPendentes(data);
        setUpdate(false);
        trigger(true)
      } catch (error) {
        setErro(error.response.data.message);
      }
    }

    if (update) fetchAmizadesPendentes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update]);

  return { amizadesPendentes, erro, setUpdate };
}
