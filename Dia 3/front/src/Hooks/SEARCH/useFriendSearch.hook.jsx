import { useEffect, useState } from "react";
import { listarAmizadesUsuario } from "../../API/GET/listarAmizadesUsuario";
import { useGlobalUser } from "../../Context/useGlobalUser";


export function useFriendSearch() {
  const [userList, setUserList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [user] = useGlobalUser();

  const fetchUsers = async () => {
    try {
      const users = await listarAmizadesUsuario(user.id);
      setUserList(users);
      setFilteredList(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSearchInput(event) {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    const filteredUsers = userList.filter(
      (user) =>
        user.nome.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredList(filteredUsers);
  }, [searchValue, userList]);

  return { handleSearchInput, searchValue, filteredList };
}
