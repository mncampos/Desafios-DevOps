import { Header, PostCardList } from "../../Components/components_index";
import { useDashboard } from "../../Hooks/POST/useDashboard.hook";
import './dashboard.css'
export function DashboardScreen() {
  const { posts, loading, erro, handleNextPage, handlePreviousPage, pageNumber, setFetchTrigger } =
    useDashboard();

  return posts? (
    <section className="dashboardScreenSection">
      <Header />
      <PostCardList
        posts={posts}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        loading={loading}
        erro={erro}
        pageNumber={pageNumber}
        trigger={setFetchTrigger}
      />
    </section>
  ) : <p>Carregando</p>;
}
