import { makeStyles } from '@material-ui/core/styles';
import Post from 'types/Post';
import HighFiveCard from 'components/HighFiveCard';

const useStyles = makeStyles((theme) => ({
  postList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    '& li:not(:first-child)': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface PostListProps {
  items: Post[];
}

const PostList = ({ items }: PostListProps) => {
  const classes = useStyles();

  return (
    <ul className={classes.postList}>
      {items.map((item) => (
        <li key={item.item.id}>
          {item.type === 'highFive' && <HighFiveCard highFive={item.item} />}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
