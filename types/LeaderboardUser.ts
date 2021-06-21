import User from 'types/User';

interface LeaderboardUser extends User {
  pointsChange: number;
}

export default LeaderboardUser;
