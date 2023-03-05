import { Button } from "@mui/material";
import {
  FriendRequestList,
  Header,
  UserCard,
  CreatePost,
} from "../../Components/components_index";
import { useFetchUpdatedUser } from "../../Hooks/AUTH/useFetchUpdatedUser.hook";
import "./profileScreen.css";

export function ProfileScreen() {
  const { user, setTrigger } = useFetchUpdatedUser();

  return (
    <section className="profilePageSection">
      <Header />
      <section className="profileSection">
        <Button variant="contained" href={"/editar"} color="purple">
          Editar perfil
        </Button>
        <UserCard userInfo={user} />
        <div className="profileContent">
          <FriendRequestList trigger={setTrigger} />
          <CreatePost />
        </div>
      </section>
    </section>
  );
}
