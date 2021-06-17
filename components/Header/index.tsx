import Image from 'next/image';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { HiOutlineBell } from 'react-icons/hi';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
  },
  gridItem: {
    display: 'flex',
    alignItem: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container>
        <Grid justify="space-between" alignItems="center" container>
          <Grid className={classes.gridItem} item>
            <Image src="/highfive.svg" alt="Highfive" width={124} height={32} />
          </Grid>
          <Grid className={classes.gridItem} item />
          <Grid className={classes.gridItem} item>
            <IconButton aria-label="Notifications" edge="end">
              <HiOutlineBell size={20} />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
