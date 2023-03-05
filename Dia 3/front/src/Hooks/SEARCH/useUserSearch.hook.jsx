import { useEffect, useState } from "react";
import { listarUsuariosAtivos } from "../../API/GET/listarUsuariosAtivos";

export function useUserSearch() {
  const [userList, setUserList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const fetchUsers = async () => {
    try {
      const users = await listarUsuariosAtivos();
      setUserList(users);
      setFilteredList(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
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
