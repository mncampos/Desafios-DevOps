import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { situacaoAmizade } from "../../API/GET/situacaoAmizade";
import { useGlobalUser } from "../../Context/useGlobalUser";

export function useCheckFriendshipStatus(id) {
  const [user] = useGlobalUser();
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  const [trigger, setTrigger] = useState(false);

  const fetchStatus = async () => {
    try {
      const res = await situacaoAmizade(user.id, id);
      setStatus({
        remetente: res.remetente,
        destinatario: res.destinatario,
        situacao: res.situacaoAmizade,
        amizadeId: res.amizadeId,
      });
    } catch (error) {
      setStatus({ situacao: "SEM_SITUACAO" });
    }
  };

  useEffect(() => {
    if (trigger) {
      fetchStatus();
      setTrigger(false);
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  useEffect(() => {
    if (user.id === parseInt(id)) navigate("/perfil");
    else fetchStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { status, setTrigger };
}
