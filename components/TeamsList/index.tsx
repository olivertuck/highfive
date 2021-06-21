import Team from 'types/Team';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Avatar from 'components/Avatar';

interface TeamsListProps {
  teams: Team[];
}

const TeamsList = ({ teams }: TeamsListProps) => (
  <List>
    {teams.map((team) => (
      <ListItem
        key={team.id}
        avatar={<Avatar src={team.photoURL} alt={team.name} />}
        title={team.name}
        subtitle={`${team.members.length.toString()} ${
          team.members.length === 1 ? 'member' : 'members'
        }`}
      />
    ))}
  </List>
);

export default TeamsList;
