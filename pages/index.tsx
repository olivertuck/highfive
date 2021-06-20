import Head from 'next/head';
import Post from 'types/Post';
import LeaderboardItem from 'types/LeaderboardItem';
import Layout from 'components/Layout';
import CreatePostCard from 'components/CreatePostCard';
import PostsList from 'components/PostsList';
import PointsCard from 'components/PointsCard';
import LeaderboardCard from 'components/LeaderboardCard';

const posts: Post[] = [
  {
    type: 'highFive',
    post: {
      id: '1',
      giver: {
        id: '1',
        fullname: 'Oliver Tuck',
        photoURL:
          'https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/118702179_2781749765442273_5517126084877553362_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UeaMKrNmBZQAX-jTf8_&_nc_ht=scontent-man2-1.xx&oh=f16d401de6c3f31320cee854b067f602&oe=60D1753F',
        jobTitle: 'Software Engineer',
      },
      receiver: {
        id: '2',
        fullname: 'Derek Aryiku',
        photoURL:
          'https://media-exp3.licdn.com/dms/image/C4E03AQEFuqK0OnWVjw/profile-displayphoto-shrink_800_800/0/1559908113220?e=1629331200&v=beta&t=nHUjvGcxXRhlCEkzcP-r7cLLAUzOnNRajLliSJ4TjZc',
        jobTitle: 'Strategic Accounts',
      },
      pointsGiven: 100,
      createdAt: '2021-06-18T11:00:00.000Z',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas ipsum eu nulla dapibus, eget maximus augue fringilla. Pellentesque ornare ullamcorper porta.',
      likesCount: 22,
      commentsCount: 7,
    },
  },
  {
    type: 'highFive',
    post: {
      id: '2',
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
          'https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/118702179_2781749765442273_5517126084877553362_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UeaMKrNmBZQAX-jTf8_&_nc_ht=scontent-man2-1.xx&oh=f16d401de6c3f31320cee854b067f602&oe=60D1753F',
        jobTitle: 'Software Engineer',
      },
      pointsGiven: 100,
      createdAt: '2021-06-18T10:00:00.000Z',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas ipsum eu nulla dapibus, eget maximus augue fringilla. Pellentesque ornare ullamcorper porta.',
      likesCount: 17,
      commentsCount: 9,
    },
  },
  {
    type: 'highFive',
    post: {
      id: '3',
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
          'https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/118702179_2781749765442273_5517126084877553362_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UeaMKrNmBZQAX-jTf8_&_nc_ht=scontent-man2-1.xx&oh=f16d401de6c3f31320cee854b067f602&oe=60D1753F',
        jobTitle: 'Software Engineer',
      },
      pointsGiven: 200,
      createdAt: '2021-06-18T09:00:00.000Z',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas ipsum eu nulla dapibus, eget maximus augue fringilla. Pellentesque ornare ullamcorper porta.',
      likesCount: 26,
      commentsCount: 14,
    },
  },
];

const leaderboard: LeaderboardItem[] = [
  {
    id: '1',
    user: {
      id: '2',
      fullname: 'Derek Aryiku',
      photoURL:
        'https://media-exp3.licdn.com/dms/image/C4E03AQEFuqK0OnWVjw/profile-displayphoto-shrink_800_800/0/1559908113220?e=1629331200&v=beta&t=nHUjvGcxXRhlCEkzcP-r7cLLAUzOnNRajLliSJ4TjZc',
      jobTitle: 'Strategic Accounts',
    },
    pointsChange: 200,
  },
  {
    id: '2',
    user: {
      id: '1',
      fullname: 'Oliver Tuck',
      photoURL:
        'https://scontent-man2-1.xx.fbcdn.net/v/t1.6435-9/118702179_2781749765442273_5517126084877553362_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=UeaMKrNmBZQAX-jTf8_&_nc_ht=scontent-man2-1.xx&oh=f16d401de6c3f31320cee854b067f602&oe=60D1753F',
      jobTitle: 'Software Engineer',
    },
    pointsChange: 100,
  },
];

const Home = () => (
  <>
    <Head>
      <title>Home | Highfive</title>
      <meta name="description" content="Home | Highfive" />
    </Head>
    <Layout
      main={
        <div className="space-y-4">
          <CreatePostCard />
          <PostsList posts={posts} />
        </div>
      }
      aside={
        <div className="space-y-4">
          <PointsCard pointsCount={400} />
          <LeaderboardCard leaderboard={leaderboard} />
        </div>
      }
    />
  </>
);

export default Home;
