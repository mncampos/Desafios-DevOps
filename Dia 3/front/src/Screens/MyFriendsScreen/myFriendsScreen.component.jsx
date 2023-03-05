import { Header, UserList } from "../../Components/components_index.js";
import { useFriendSearch } from "../../Hooks/SEARCH/useFriendSearch.hook.jsx";

export function MyFriendsScreen() {
  const { handleSearchInput, searchValue, filteredList } = useFriendSearch();

  return (
    <section className="pageSection">
      <Header />
      <UserList
        pageTitle="Meus Amigos"
        handleSearchInput={handleSearchInput}
        searchValue={searchValue}
        filteredList={filteredList}
      />
    </section>
  );
}
