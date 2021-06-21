import User from 'types/User';

interface Team {
  id: string;
  name: string;
  members: User[];
  photoURL: string;
}

export default Team;
