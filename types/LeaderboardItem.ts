import User from 'types/User';

interface LeaderboardItem {
  id: string;
  user: User;
  pointsChange: number;
}

export default LeaderboardItem;
