import LeaderboardTimeframe from 'types/LeaderboardTimeframe';
import CardFooterButton from 'components/CardFooterButton';

interface LeaderboardCardFooterButtonProps {
  timeframe: LeaderboardTimeframe;
  currentTimeframe: LeaderboardTimeframe;
  setCurrentTimeframe: (timeframe: LeaderboardTimeframe) => void;
}

const LeaderboardCardFooterButton = ({
  timeframe,
  currentTimeframe,
  setCurrentTimeframe,
}: LeaderboardCardFooterButtonProps) => (
  <CardFooterButton
    width="1/4"
    active={timeframe === currentTimeframe}
    onClick={() => setCurrentTimeframe(timeframe)}
  >
    {timeframe}
  </CardFooterButton>
);

export default LeaderboardCardFooterButton;
