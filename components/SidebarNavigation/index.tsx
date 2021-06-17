import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {
  HiOutlineHome,
  HiOutlineCalendar,
  HiOutlineChartBar,
  HiOutlineStar,
} from 'react-icons/hi';
import ListItemText from '@material-ui/core/ListItemText';

const SidebarNavigation = () => (
  <List disablePadding>
    <ListItem component="li" button selected>
      <ListItemIcon>
        <HiOutlineHome size={20} />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem component="li" button>
      <ListItemIcon>
        <HiOutlineCalendar size={20} />
      </ListItemIcon>
      <ListItemText primary="Events" />
    </ListItem>
    <ListItem component="li" button>
      <ListItemIcon>
        <HiOutlineChartBar size={20} />
      </ListItemIcon>
      <ListItemText primary="Surveys" />
    </ListItem>
    <ListItem component="li" button>
      <ListItemIcon>
        <HiOutlineStar size={20} />
      </ListItemIcon>
      <ListItemText primary="Rewards" />
    </ListItem>
  </List>
);

export default SidebarNavigation;
