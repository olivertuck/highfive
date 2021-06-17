import User from 'types/User';

interface HighFive {
  id: string;
  createdAt: string;
  giver: User;
  receiver: User;
  pointsGiven: number;
  body: string;
}

export default HighFive;
