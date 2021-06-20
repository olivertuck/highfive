import User from 'types/User';

interface HighFive {
  id: string;
  giver: User;
  receiver: User;
  pointsGiven: number;
  createdAt: string;
  body: string;
  likesCount: number;
  commentsCount: number;
}

export default HighFive;
