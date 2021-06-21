import User from 'types/User';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Avatar from 'components/Avatar';

interface PeopleListProps {
  people: User[];
}

const PeopleList = ({ people }: PeopleListProps) => (
  <List>
    {people.map((person) => (
      <ListItem
        key={person.id}
        avatar={<Avatar src={person.photoURL} alt={person.fullname} />}
        title={person.fullname}
        subtitle={person.jobTitle}
      />
    ))}
  </List>
);

export default PeopleList;
