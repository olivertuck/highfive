import { IoTrophyOutline } from 'react-icons/io5';
import LeaderboardItem from 'types/LeaderboardItem';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';
import Avatar from 'components/Avatar';
import Badge from 'components/Badge';

interface LeaderboardCardProps {
  leaderboard: LeaderboardItem[];
}

const LeaderboardCard = ({ leaderboard }: LeaderboardCardProps) => (
  <Card>
    <CardHeader title="Leaderboard" icon={<IoTrophyOutline size={20} />} />
    <CardContent>
      <ul className="divide-y">
        {leaderboard.map((leaderboardItem) => (
          <li
            key={leaderboardItem.id}
            className="flex items-center justify-between py-2 first:pt-0 last:pb-0"
          >
            <div className="flex items-start space-x-2">
              <Avatar
                src={leaderboardItem.user.photoURL}
                alt={leaderboardItem.user.fullname}
              />
              <div>
                <div className="text-sm font-semibold text-gray-800">
                  {leaderboardItem.user.fullname}
                </div>
                <div className="text-sm">{leaderboardItem.user.jobTitle}</div>
              </div>
            </div>
            <Badge color="green">{`+${leaderboardItem.pointsChange}`}</Badge>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default LeaderboardCard;
