import {
  HiOutlineDotsVertical,
  HiOutlineThumbUp,
  HiOutlineChatAlt2,
} from 'react-icons/hi';
import Post from 'types/Post';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import dayjs from 'utils/dayjs';
import Avatar from 'components/Avatar';
import IconButton from 'components/IconButton';
import CardContent from 'components/CardContent';
import CardFooter from 'components/CardFooter';
import CardFooterButton from 'components/CardFooterButton';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => (
  <Card>
    <CardHeader
      action={
        <IconButton>
          <HiOutlineDotsVertical size={20} />
        </IconButton>
      }
    >
      <div className="flex items-start">
        <Avatar src={post.post.giver.photoURL} alt={post.post.giver.fullname} />
        <div className="ml-2">
          <div className="text-sm">
            <span className="font-semibold text-gray-800">
              {post.post.giver.fullname}
            </span>{' '}
            gave{' '}
            <span className="font-semibold text-gray-800">
              {post.post.receiver.fullname}
            </span>{' '}
            a high five ✋
          </div>
          <div className="text-sm">{dayjs(post.post.createdAt).fromNow()}</div>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-gray-800">{post.post.body}</p>
      <div className="flex justify-between text-sm">
        <div>{`${post.post.likesCount} likes`}</div>
        <div>{`${post.post.commentsCount} comments`}</div>
      </div>
    </CardContent>
    <CardFooter>
      <CardFooterButton icon={<HiOutlineThumbUp size={20} />}>
        Like
      </CardFooterButton>
      <CardFooterButton icon={<HiOutlineChatAlt2 size={20} />}>
        Comment
      </CardFooterButton>
    </CardFooter>
  </Card>
);

export default PostCard;
