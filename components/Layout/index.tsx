import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import MobileNavigation from 'components/MobileNavigation';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  grid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(9),
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: '256px 1fr 256px',
      gap: theme.spacing(4),
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },
}));

interface LayoutProps {
  main: ReactNode;
}

const Layout = ({ main }: LayoutProps) => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.container}>
        <div className={classes.grid}>
          <Hidden xsDown>
            <Sidebar />
          </Hidden>
          <main>{main}</main>
        </div>
      </Container>
      <Hidden smUp>
        <MobileNavigation />
      </Hidden>
    </>
  );
};

export default Layout;
