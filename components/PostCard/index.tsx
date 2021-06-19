import {
  IoEllipsisVertical,
  IoHeartOutline,
  IoChatboxOutline,
} from 'react-icons/io5';
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
          <IoEllipsisVertical size={20} />
        </IconButton>
      }
    >
      <div className="flex items-start space-x-2">
        <Avatar src={post.post.giver.photoURL} alt={post.post.giver.fullname} />
        <div>
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
      <div className="flex justify-between mt-3 text-sm">
        <div>{`${post.post.likesCount} likes`}</div>
        <div>{`${post.post.commentsCount} comments`}</div>
      </div>
    </CardContent>
    <CardFooter>
      <CardFooterButton icon={<IoHeartOutline size={20} />}>
        Like
      </CardFooterButton>
      <CardFooterButton icon={<IoChatboxOutline size={20} />}>
        Comment
      </CardFooterButton>
    </CardFooter>
  </Card>
);

export default PostCard;
