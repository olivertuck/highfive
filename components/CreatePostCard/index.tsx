import Card from 'components/Card';
import CardContent from 'components/CardContent';
import Avatar from 'components/Avatar';
import Input from 'components/Input';
import Button from 'components/Button';

const CreatePostCard = () => (
  <Card>
    <CardContent>
      <div className="flex space-x-2">
        <Avatar
          src="https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/118702179_2781749765442273_5517126084877553362_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UeaMKrNmBZQAX-jTf8_&_nc_ht=scontent-man2-1.xx&oh=f16d401de6c3f31320cee854b067f602&oe=60D1753F"
          alt="Oliver Tuck"
        />
        <Input placeholder="Write a new post..." />
        <Button>High five</Button>
      </div>
    </CardContent>
  </Card>
);

export default CreatePostCard;
