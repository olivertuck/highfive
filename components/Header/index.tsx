import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { HiOutlineBell, HiOutlineMail } from 'react-icons/hi';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container>
        <Grid justify="space-between" container>
          <Grid item />
          <Grid item>
            <Grid alignItems="center" container>
              <Grid item>
                <IconButton aria-label="Notifications">
                  <HiOutlineBell size={20} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton edge="end" aria-label="Notifications">
                  <HiOutlineMail size={20} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
