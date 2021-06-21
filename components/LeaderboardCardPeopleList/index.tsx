import LeaderboardUser from 'types/LeaderboardUser';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Avatar from 'components/Avatar';
import Badge from 'components/Badge';

interface LeaderboardCardPeopleListProps {
  people: LeaderboardUser[];
}

const LeaderboardCardPeopleList = ({
  people,
}: LeaderboardCardPeopleListProps) => (
  <List>
    {people.map((person) => (
      <ListItem
        key={person.id}
        avatar={<Avatar src={person.photoURL} alt={person.fullname} />}
        title={person.fullname}
        subtitle={person.jobTitle}
        action={<Badge color="green">{person.pointsChange}</Badge>}
      />
    ))}
  </List>
);

export default LeaderboardCardPeopleList;
