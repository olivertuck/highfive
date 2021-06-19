import User from 'types/User';

interface HighFive {
  id: string;
  giver: User;
  receiver: User;
  createdAt: string;
  body: string;
}

export default HighFive;
