import { useState } from 'react';
import { MentionsInput, Mention } from 'react-mentions';
import {
  IoImageOutline,
  IoVideocamOutline,
  IoHappyOutline,
  IoAddOutline,
} from 'react-icons/io5';
import User from 'types/User';
import Card from 'components/Card';
import CardContent from 'components/CardContent';
import Avatar from 'components/Avatar';
import IconButton from 'components/IconButton';
import Button from 'components/Button';

const users: User[] = [
  {
    id: '1',
    fullname: 'Oliver Tuck',
    photoURL:
      'https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/118702179_2781749765442273_5517126084877553362_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UeaMKrNmBZQAX-jTf8_&_nc_ht=scontent-man2-1.xx&oh=f16d401de6c3f31320cee854b067f602&oe=60D1753F',
    jobTitle: 'Software Engineer',
  },
  {
    id: '2',
    fullname: 'Derek Aryiku',
    photoURL:
      'https://media-exp3.licdn.com/dms/image/C4E03AQEFuqK0OnWVjw/profile-displayphoto-shrink_800_800/0/1559908113220?e=1629331200&v=beta&t=nHUjvGcxXRhlCEkzcP-r7cLLAUzOnNRajLliSJ4TjZc',
    jobTitle: 'Strategic Accounts',
  },
  {
    id: '3',
    fullname: 'Isabella Rossi',
    photoURL:
      'https://media-exp3.licdn.com/dms/image/C4D03AQFGutJ5UeNoNA/profile-displayphoto-shrink_800_800/0/1573011232631?e=1629331200&v=beta&t=ZefNMDmVzZ39XiWa34dQPleM-Sp3mappI6geNuU4AEc',
    jobTitle: 'Software Engineer',
  },
];

const data = users.map((user) => ({
  id: user.id,
  display: user.fullname,
}));

const CreatePostCard = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: any, newValue: string) => setValue(newValue);

  return (
    <Card>
      <CardContent>
        <div className="flex space-x-2">
          <Avatar
            src="https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/118702179_2781749765442273_5517126084877553362_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UeaMKrNmBZQAX-jTf8_&_nc_ht=scontent-man2-1.xx&oh=f16d401de6c3f31320cee854b067f602&oe=60D1753F"
            alt="Oliver Tuck"
          />
          <MentionsInput
            className="w-full create-post-mentions-input"
            placeholder="Write a new post..."
            a11ySuggestionsListLabel="Mention a user to high five"
            value={value}
            onChange={handleChange}
          >
            <Mention trigger="@" data={data} />
          </MentionsInput>
        </div>
        <div className="flex justify-end">
          <div className="absolute bottom-1 left-1">
            <IconButton>
              <IoImageOutline size={20} />
            </IconButton>
            <IconButton>
              <IoVideocamOutline size={20} />
            </IconButton>
            <IconButton>
              <IoHappyOutline size={20} />
            </IconButton>
            <IconButton>
              <IoAddOutline size={20} />
            </IconButton>
          </div>
          <Button>High five</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePostCard;
