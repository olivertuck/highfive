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
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import HighFive from 'types/HighFive';
import dayjs from 'utils/dayjs';

interface HighFiveCardProps {
  highFive: HighFive;
}

const HighFiveCard = ({ highFive }: HighFiveCardProps) => (
  <Card>
    <CardHeader
      avatar={
        <Avatar
          src={highFive.giver.photoURL}
          aria-label={highFive.giver.fullname}
        />
      }
      title={
        <>
          <Typography variant="subtitle2" component="span" color="textPrimary">
            {highFive.giver.fullname}
          </Typography>{' '}
          <Typography variant="body2" component="span" color="textSecondary">
            gave
          </Typography>{' '}
          <Typography variant="subtitle2" component="span" color="textPrimary">
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
      <Typography variant="body2" color="textSecondary">
        {highFive.body}
      </Typography>
    </CardContent>
    <CardActions>
      <Button startIcon={<HiOutlineThumbUp size={20} />}>Like</Button>
      <Button startIcon={<HiOutlineChatAlt2 size={20} />}>Comment</Button>
    </CardActions>
  </Card>
);

export default HighFiveCard;
