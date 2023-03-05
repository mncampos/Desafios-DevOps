import { useGlobalUser } from "../../Context/useGlobalUser";
import { useEffect } from "react";
import { detailedUser } from "../../API/AUTH/detailedUser";
import { useFetchFriendships } from "../../Hooks/FRIENDSHIP/useFetchFriendships.hook";

export function useFetchUpdatedUser() {
  const [user, setUser] = useGlobalUser();
  const { friendships, setTrigger } = useFetchFriendships(user.id);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await detailedUser();
        
        setUser({...data, friendships: friendships});
      } catch (error) {
        window.alert("Erro ao buscar dados.");
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[friendships] );

  return { user, setTrigger };
}
