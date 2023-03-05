import "./postCardList.css";
import { PostCard } from "../components_index";
import { PaginationButtons } from "../PaginationButtons/paginationButtons.component";

export function PostCardList({
  posts,
  loading,
  erro,
  handleNextPage,
  handlePreviousPage,
  pageNumber,
  trigger,
}) {
  return (
    <div className="postsListContainer">
      <div className="postList">
        {posts.map((post, index) => {
          return <PostCard post={post} key={index} trigger={trigger} />;
        })}
      </div>
      <div className="paginationButtons">
        <PaginationButtons
          handleNext={handleNextPage}
          handlePrevious={handlePreviousPage}
          pageNumber={pageNumber}
        />
      </div>
    </div>
  );
}
