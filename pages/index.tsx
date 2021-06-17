import Head from 'next/head';
import FeedListItem from 'types/FeedListItem';
import Layout from 'components/Layout';
import FeedList from 'components/FeedList';

const feedListItems: FeedListItem[] = [
  {
    type: 'highFive',
    item: {
      id: '1',
      createdAt: '2021-06-17T14:00:00.000Z',
      giver: {
        id: '1',
        fullname: 'Oliver Tuck',
        photoURL:
          'https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/118702179_2781749765442273_5517126084877553362_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=RlNcqnxQ4I8AX8E9Iwo&_nc_ht=scontent-man2-1.xx&oh=6a03499e60f4fca48cdb8038386e0112&oe=60CF7AFF',
        jobTitle: 'Software Engineer',
      },
      receiver: {
        id: '2',
        fullname: 'Derek Aryiku',
        photoURL:
          'https://media-exp3.licdn.com/dms/image/C4E03AQEFuqK0OnWVjw/profile-displayphoto-shrink_800_800/0/1559908113220?e=1629331200&v=beta&t=nHUjvGcxXRhlCEkzcP-r7cLLAUzOnNRajLliSJ4TjZc',
        jobTitle: 'Strategic Accounts',
      },
      pointsGiven: 50,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac mi non tellus efficitur ultricies. Donec eget mi non velit imperdiet dapibus sit amet et risus. ',
    },
  },
  {
    type: 'highFive',
    item: {
      id: '2',
      createdAt: '2021-06-17T13:00:00.000Z',
      giver: {
        id: '2',
        fullname: 'Derek Aryiku',
        photoURL:
          'https://media-exp3.licdn.com/dms/image/C4E03AQEFuqK0OnWVjw/profile-displayphoto-shrink_800_800/0/1559908113220?e=1629331200&v=beta&t=nHUjvGcxXRhlCEkzcP-r7cLLAUzOnNRajLliSJ4TjZc',
        jobTitle: 'Strategic Accounts',
      },
      receiver: {
        id: '1',
        fullname: 'Oliver Tuck',
        photoURL:
          'https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/118702179_2781749765442273_5517126084877553362_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=RlNcqnxQ4I8AX8E9Iwo&_nc_ht=scontent-man2-1.xx&oh=6a03499e60f4fca48cdb8038386e0112&oe=60CF7AFF',
        jobTitle: 'Software Engineer',
      },
      pointsGiven: 75,
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac mi non tellus efficitur ultricies. Donec eget mi non velit imperdiet dapibus sit amet et risus. ',
    },
  },
];

const Home = () => (
  <>
    <Head>
      <title>Home | Highfive</title>
      <meta name="description" content="Home | Highfive" />
    </Head>
    <Layout main={<FeedList items={feedListItems} />} />
  </>
);

export default Home;
