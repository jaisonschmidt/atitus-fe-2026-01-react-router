import { Link } from "react-router-dom";
import PostItem from "./PostItem";

export default function PostList({ posts, onPostClick }) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Link to={`/post/${post.id}`} key={post.id}>
          <PostItem
            key={post.id}
            title={post.title}
            summary={post.summary}
            author={post.author}
            date={post.date}
            onClick={() => onPostClick(post.id)}
          />
        </Link>
      ))}
    </div>
  );
}
