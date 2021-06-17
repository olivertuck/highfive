import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineStar,
} from 'react-icons/hi';

const useStyles = makeStyles((theme) => ({
  mobileNavigation: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
    boxShadow: theme.shadows[3],
  },
}));

const MobileNavigation = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.mobileNavigation} value={0} showLabels>
      <BottomNavigationAction label="Home" icon={<HiOutlineHome size={20} />} />
      <BottomNavigationAction
        label="Events"
        icon={<HiOutlineCalendar size={20} />}
      />
      <BottomNavigationAction
        label="Surveys"
        icon={<HiOutlineChartBar size={20} />}
      />
      <BottomNavigationAction
        label="Rewards"
        icon={<HiOutlineStar size={20} />}
      />
    </BottomNavigation>
  );
};

export default MobileNavigation;
