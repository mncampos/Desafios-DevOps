import { useParams } from "react-router-dom";
import {
  FriendshipStatus,
  Header,
  PostCard,
  UserCard,
} from "../../Components/components_index";
import { useCheckFriendshipStatus } from "../../Hooks/FRIENDSHIP/useCheckFriendshipStatus.hook";
import { useFetchUserPosts } from "../../Hooks/POST/useFetcUserPosts.hook";
import { useOtherUserProfile } from "../../Hooks/USERS/useOtherUserProfile.hook";
import "./otherUserScreen.css";

export function OtherUserScreen() {
  const { id } = useParams();
  const { userData } = useOtherUserProfile(id);
  const { status, setTrigger } = useCheckFriendshipStatus(id);
  const { posts, setPostTrigger } = useFetchUserPosts(id, status?.situacao);

  return userData ? (
    <section className="pageSection">
      <Header />
      <section className="profileSection">
        <UserCard userInfo={userData} />
        <div className="otherProfileContent">
          <FriendshipStatus
            friendship={status}
            userId={id}
            trigger={setTrigger}
            postTrigger={setPostTrigger}
          />
          {posts.map((post, index) => {
            return (
              <PostCard key={index} post={post} trigger={setPostTrigger} />
            );
          })}
        </div>
      </section>
    </section>
  ) : null;
}
