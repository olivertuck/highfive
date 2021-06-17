import { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: '256px 1fr 256px',
    gap: theme.spacing(4),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
      <Container>
        <div className={classes.grid}>
          <Sidebar />
          <main>{main}</main>
        </div>
      </Container>
    </>
  );
};

export default Layout;
