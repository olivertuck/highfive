import { useState } from 'react';
import { IoTrophyOutline } from 'react-icons/io5';
import LeaderboardItem from 'types/LeaderboardItem';
import LeaderboardTimeframe from 'types/LeaderboardTimeframe';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';
import Avatar from 'components/Avatar';
import Badge from 'components/Badge';
import CardFooter from 'components/CardFooter';
import LeaderboardCardFooterButton from 'components/LeaderboardCardFooterButton';

interface LeaderboardCardProps {
  leaderboard: LeaderboardItem[];
}

const LeaderboardCard = ({ leaderboard }: LeaderboardCardProps) => {
  const [currentTimeframe, setCurrentTimeframe] =
    useState<LeaderboardTimeframe>('1d');

  return (
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
      <CardFooter>
        <LeaderboardCardFooterButton
          timeframe="1d"
          currentTimeframe={currentTimeframe}
          setCurrentTimeframe={setCurrentTimeframe}
        />
        <LeaderboardCardFooterButton
          timeframe="1w"
          currentTimeframe={currentTimeframe}
          setCurrentTimeframe={setCurrentTimeframe}
        />
        <LeaderboardCardFooterButton
          timeframe="1m"
          currentTimeframe={currentTimeframe}
          setCurrentTimeframe={setCurrentTimeframe}
        />
        <LeaderboardCardFooterButton
          timeframe="1y"
          currentTimeframe={currentTimeframe}
          setCurrentTimeframe={setCurrentTimeframe}
        />
      </CardFooter>
    </Card>
  );
};

export default LeaderboardCard;
