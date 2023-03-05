import { useEffect, useState } from "react";
import { listarDashboard } from "../../API/GET/listarDashboard";

export function useDashboard() {
  const [posts, setPosts] = useState();
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [fetchTrigger, setFetchTrigger] = useState(false);

  const fetchData = async () => {
    try {
      const data = await listarDashboard(pageNumber);
      setPosts(data.content);
      setLoading(false);
    } catch (error) {
      setErro(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  useEffect(() => {
    if (fetchTrigger) {
      fetchData();
      setFetchTrigger(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchTrigger]);

  function handleNextPage() {
    setPageNumber((pageNumber) => Math.max(pageNumber + 1, 0));
  }

  function handlePreviousPage() {
    setPageNumber((pageNumber) => Math.max(pageNumber - 1, 0));
  }

  return {
    posts,
    loading,
    erro,
    pageNumber,
    handleNextPage,
    handlePreviousPage,
    setFetchTrigger
  };
}
