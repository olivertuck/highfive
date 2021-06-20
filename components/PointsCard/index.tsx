import { IoCartOutline, IoGiftOutline } from 'react-icons/io5';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';
import CardFooter from 'components/CardFooter';
import CardFooterButton from 'components/CardFooterButton';

interface PointsCardProps {
  pointsCount: number;
}

const PointsCard = ({ pointsCount }: PointsCardProps) => (
  <Card>
    <CardHeader>
      <h2>Points</h2>
    </CardHeader>
    <CardContent>
      <p>{`You have ${pointsCount} points to redeem`}</p>
    </CardContent>
    <CardFooter>
      <CardFooterButton icon={<IoCartOutline size={20} />}>
        Redeem
      </CardFooterButton>
      <CardFooterButton icon={<IoGiftOutline size={20} />}>
        Gift
      </CardFooterButton>
    </CardFooter>
  </Card>
);

export default PointsCard;
