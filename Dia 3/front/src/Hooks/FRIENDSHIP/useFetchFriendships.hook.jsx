import { useEffect, useState } from "react";
import { listarAmizadesUsuario } from "../../API/GET/listarAmizadesUsuario";

export function useFetchFriendships(id) {
  const [friendships, setFriendships] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const fetchFriendships = async () => {
    try {
      const res = await listarAmizadesUsuario(id);
      setFriendships(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFriendships();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (trigger) {
      fetchFriendships();
      setTrigger(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  return { friendships, setTrigger };
}
