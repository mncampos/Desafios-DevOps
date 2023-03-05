import { desfazerAmizade } from "../../API/DELETE/desfazerAmizade";
import { solicitarAmizade } from "../../API/POST/solicitarAmizade";

export function useMakeFriendshipRequest(userId, friendshipId, trigger, postTrigger){
    
    async function handleSolicitar(){
        await solicitarAmizade(userId);
        trigger(true)
        postTrigger(true)
    }

    async function handleDeletar(){
        await desfazerAmizade(friendshipId);
        trigger(true)
        postTrigger(true)
    }

    return {handleDeletar, handleSolicitar}

}