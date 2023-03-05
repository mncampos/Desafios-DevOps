import { Button } from "@mui/material";
import { useMakeFriendshipRequest } from "../../Hooks/FRIENDSHIP/useMakeFriendshipRequest.hook";

export function FriendshipStatus({ friendship, userId, trigger, postTrigger }) {

    const {handleDeletar, handleSolicitar} = useMakeFriendshipRequest(userId, friendship.amizadeId, trigger, postTrigger)
    

  const BOTAO = {
    SEM_SITUACAO: (
      <div className="semSituacaoContainer">
        <Button variant="contained" color="light" onClick={handleSolicitar}>
          Solicitar amizade
        </Button>
      </div>
    ),

    AMIGOS: (
      <div className="amigosContainer">
        <Button variant="contained" color="error" onClick={handleDeletar}>
          Desfazer amizade
        </Button>
      </div>
    ),
    PENDENTE: (
      <div className="pendenteContainer">
        <p className="pendenteText">Solicitacao de amizade pendente</p>
      </div>
    ),
    REJEITADO: (
      <div className="rejeitadoContainer">
        <p className="errorMsg">Solicitacao de amizade rejeitada</p>
      </div>
    )
  };

  return friendship ? (
    <div className="friendshipStatus">{BOTAO[friendship.situacao]}</div>
  ) : null;
}
