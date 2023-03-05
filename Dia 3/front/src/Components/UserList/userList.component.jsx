import { SmallUserCard } from "../components_index";
import "./userList.css";

export function UserList({ filteredList, pageTitle, handleSearchInput, searchValue }) {

  return (
    <section className="userListSection">
      <h1 className="searchPageTitle">{pageTitle}</h1>
      <input
        className="searchBar"
        type="text"
        placeholder="Insira um nome ou e-mail para filtrar"
        value={searchValue}
        onChange={handleSearchInput}
      />
      <div className="userListContainer">
        {filteredList?.map((user, index) => {
          return <SmallUserCard userInfo={user} key={index} />;
        })}
      </div>
    </section>
  );
}
