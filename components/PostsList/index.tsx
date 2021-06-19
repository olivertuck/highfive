import Post from 'types/Post';
import PostCard from 'components/PostCard';

interface PostsListProps {
  posts: Post[];
}

const PostsList = ({ posts }: PostsListProps) => (
  <ul className="space-y-4">
    {posts.map((post) => (
      <li key={post.post.id}>
        <PostCard post={post} />
      </li>
    ))}
  </ul>
);

export default PostsList;
