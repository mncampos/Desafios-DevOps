import { useFetchFriendRequests } from "../../Hooks/FRIENDSHIP/useFetchFriendRequests.hook";
import { FriendRequest } from "../components_index";
import "./friendRequestList.css";
export function FriendRequestList({trigger}) {
  const { amizadesPendentes, setUpdate } = useFetchFriendRequests(trigger);

  return amizadesPendentes ? (
    <div className="friendshipRequestListContainer">
      <h1 className="friendshipRequestTitle">Pedidos de Amizade</h1>
      {amizadesPendentes.map((amizade, index) => {
        return <FriendRequest key={index} friendshipRequest={amizade} setUpdate={setUpdate} />;
      })}
    </div>
  ) : null;
}
