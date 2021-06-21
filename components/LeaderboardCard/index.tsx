import { useState } from 'react';
import { IoTrophyOutline } from 'react-icons/io5';
import Leaderboard from 'types/Leaderboard';
import LeaderboardTimeframe from 'types/LeaderboardTimeframe';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';
import LeaderboardCardPeopleList from 'components/LeaderboardCardPeopleList';
import CardFooter from 'components/CardFooter';
import LeaderboardCardFooterButton from 'components/LeaderboardCardFooterButton';

interface LeaderboardCardProps {
  leaderboard: Leaderboard;
}

const LeaderboardCard = ({ leaderboard }: LeaderboardCardProps) => {
  const [currentTimeframe, setCurrentTimeframe] =
    useState<LeaderboardTimeframe>('Week');

  return (
    <Card>
      <CardHeader title="Leaderboard" icon={<IoTrophyOutline size={20} />} />
      <CardContent>
        <LeaderboardCardPeopleList people={leaderboard.people} />
      </CardContent>
      <CardFooter>
        <LeaderboardCardFooterButton
          timeframe="Week"
          currentTimeframe={currentTimeframe}
          setCurrentTimeframe={setCurrentTimeframe}
        />
        <LeaderboardCardFooterButton
          timeframe="Month"
          currentTimeframe={currentTimeframe}
          setCurrentTimeframe={setCurrentTimeframe}
        />
        <LeaderboardCardFooterButton
          timeframe="Year"
          currentTimeframe={currentTimeframe}
          setCurrentTimeframe={setCurrentTimeframe}
        />
      </CardFooter>
    </Card>
  );
};

export default LeaderboardCard;
