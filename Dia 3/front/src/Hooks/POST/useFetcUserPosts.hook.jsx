import { useEffect, useState } from "react";
import { buscarPosts } from "../../API/GET/buscarPosts";

export function useFetchUserPosts(id, situacao) {
  const [posts, setPosts] = useState([]);
  const [postTrigger, setPostTrigger] = useState(false);
  const fetchPosts = async () => {
    const res = await buscarPosts(id);

    if (!situacao === "AMIGOS") {
      const filteredPosts = res.filter(
        (post) => post.visibilidade === "PUBLICO"
      );
      setPosts(filteredPosts);
    } else setPosts(res);
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (postTrigger) {
      fetchPosts();
      setPostTrigger(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postTrigger]);

  return { posts, setPostTrigger };
}
