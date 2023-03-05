import { Header, UserList } from "../../Components/components_index.js";
import { useUserSearch } from "../../Hooks/SEARCH/useUserSearch.hook.jsx";
import './searchPeopleScreen.css'

export function SearchPeopleScreen(){

  const { filteredList, handleSearchInput, searchValue } = useUserSearch();

    return (
        <section className="pageSection">
          <Header/>
          <UserList filteredList={filteredList} handleSearchInput={handleSearchInput} searchValue={searchValue} pageTitle='Usuários Ativos'/>
        </section>
      );
}