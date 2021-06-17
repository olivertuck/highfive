import { makeStyles } from '@material-ui/core/styles';
import FeedListItem from 'types/FeedListItem';
import HighFiveCard from 'components/HighFiveCard';

const useStyles = makeStyles((theme) => ({
  feedList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    '& li:not(:first-child)': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface FeedListProps {
  items: FeedListItem[];
}

const FeedList = ({ items }: FeedListProps) => {
  const classes = useStyles();

  return (
    <ul className={classes.feedList}>
      {items.map((item) => (
        <li key={item.item.id}>
          {item.type === 'highFive' && <HighFiveCard highFive={item.item} />}
        </li>
      ))}
    </ul>
  );
};

export default FeedList;
