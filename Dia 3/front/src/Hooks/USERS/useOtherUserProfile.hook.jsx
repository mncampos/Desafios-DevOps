import { useEffect, useState } from "react";
import { buscaPorId } from "../../API/GET/buscarUsuarioPorId";
import { listarAmizadesUsuario } from "../../API/GET/listarAmizadesUsuario";

export function useOtherUserProfile(id) {
  const [userData, setUserData] = useState();

  const fetchData = async () => {
    const data = await buscaPorId(id);
    const friends = await listarAmizadesUsuario(id);
    setUserData({ ...data, numeroCurtidas: data.totalCurtidas, friendships: friends });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { userData };
}
