import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {
  HiOutlinePhotograph,
  HiOutlineVideoCamera,
  HiOutlineTag,
} from 'react-icons/hi';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  newPostCard: {
    marginBottom: theme.spacing(2),
  },
  inputGridItem: {
    flexGrow: 1,
  },
}));

const NewPostCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.newPostCard}>
      <CardContent>
        <Grid spacing={2} alignItems="center" container>
          <Grid item>
            <Avatar
              src="https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/118702179_2781749765442273_5517126084877553362_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=RlNcqnxQ4I8AX8E9Iwo&_nc_ht=scontent-man2-1.xx&oh=6a03499e60f4fca48cdb8038386e0112&oe=60CF7AFF"
              aria-label="Oliver Tuck"
            />
          </Grid>
          <Grid className={classes.inputGridItem} item>
            <TextField
              variant="outlined"
              placeholder="Write your post here..."
              multiline
              fullWidth
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid justify="space-between" alignItems="center" container>
          <Grid item>
            <Grid spacing={1} container>
              <Grid item>
                <IconButton aria-label="Add photo" size="small">
                  <HiOutlinePhotograph size={20} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="Add video" size="small">
                  <HiOutlineVideoCamera size={20} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton aria-label="Add tag" size="small">
                  <HiOutlineTag size={20} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Post
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default NewPostCard;
