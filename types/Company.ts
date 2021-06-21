import User from 'types/User';
import Team from 'types/Team';

interface Company {
  people: User[];
  teams: Team[];
}

export default Company;
