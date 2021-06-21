import LeaderboardUser from 'types/LeaderboardUser';
import LeaderboardTeam from 'types/LeaderboardTeam';

interface Leaderboard {
  people: LeaderboardUser[];
  teams: LeaderboardTeam[];
}

export default Leaderboard;
