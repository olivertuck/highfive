import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {
  HiOutlineDotsVertical,
  HiOutlineThumbUp,
  HiOutlineChatAlt2,
} from 'react-icons/hi';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ClampLines from 'react-clamp-lines';
import HighFive from 'types/HighFive';
import dayjs from 'utils/dayjs';

const useStyles = makeStyles((theme) => ({
  highFiveCard: {
    [theme.breakpoints.down('xs')]: {
      borderRadius: 0,
    },
  },
  body: {
    '& p': {
      ...theme.typography.body2,
      margin: 0,
      color: theme.palette.text.primary,
    },
    '& .clamp-lines__button': {
      ...theme.typography.body2,
      padding: 0,
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
    },
  },
  media: {
    height: 256,
  },
}));

interface HighFiveCardProps {
  highFive: HighFive;
}

const HighFiveCard = ({ highFive }: HighFiveCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.highFiveCard}>
      <CardHeader
        avatar={
          <Avatar
            src={highFive.giver.photoURL}
            aria-label={highFive.giver.fullname}
          />
        }
        title={
          <>
            <Typography
              variant="subtitle2"
              component="span"
              color="textPrimary"
            >
              {highFive.giver.fullname}
            </Typography>{' '}
            <Typography variant="body2" component="span" color="textSecondary">
              gave
            </Typography>{' '}
            <Typography
              variant="subtitle2"
              component="span"
              color="textPrimary"
            >
              {highFive.receiver.fullname}
            </Typography>{' '}
            <Typography variant="body2" component="span" color="textSecondary">
              a high five
            </Typography>{' '}
            ✋
          </>
        }
        subheader={`${highFive.giver.jobTitle} · ${dayjs(
          highFive.createdAt
        ).fromNow()}`}
        action={
          <IconButton aria-label="More">
            <HiOutlineDotsVertical size={20} />
          </IconButton>
        }
      />
      <CardContent>
        <ClampLines
          id={`highFiveBody-${highFive.id}`}
          text={highFive.body}
          lines={2}
          ellipsis="..."
          moreText="Read more"
          lessText="Read less"
          className={classes.body}
          innerElement="p"
        />
      </CardContent>
      {highFive.photoURL && (
        <CardMedia className={classes.media} image={highFive.photoURL} />
      )}
      <CardActions>
        <Button startIcon={<HiOutlineThumbUp size={20} />} size="small">
          Like
        </Button>
        <Button startIcon={<HiOutlineChatAlt2 size={20} />} size="small">
          Comment
        </Button>
      </CardActions>
    </Card>
  );
};

export default HighFiveCard;
