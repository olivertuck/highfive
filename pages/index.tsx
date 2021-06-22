import Head from 'next/head';
import Post from 'types/Post';
import Leaderboard from 'types/Leaderboard';
import Company from 'types/Company';
import Layout from 'components/Layout';
import CreatePostCard from 'components/CreatePostCard';
import PostsList from 'components/PostsList';
import PointsCard from 'components/PointsCard';
import LeaderboardCard from 'components/LeaderboardCard';
import CompanyCard from 'components/CompanyCard';

const posts: Post[] = [
  {
    type: 'highFive',
    post: {
      id: '1',
      giver: {
        id: '1',
        fullname: 'Oliver Tuck',
        photoURL:
          'https://media-exp3.licdn.com/dms/image/C4E03AQFYXr7syI_2Qw/profile-displayphoto-shrink_800_800/0/1516916405275?e=1629936000&v=beta&t=Nh_VHh51G_tHNbzJxFLHbdsjNDIvHug9QlE2NsgBeCg',
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
          'https://media-exp3.licdn.com/dms/image/C4E03AQFYXr7syI_2Qw/profile-displayphoto-shrink_800_800/0/1516916405275?e=1629936000&v=beta&t=Nh_VHh51G_tHNbzJxFLHbdsjNDIvHug9QlE2NsgBeCg',
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
          'https://media-exp3.licdn.com/dms/image/C4E03AQFYXr7syI_2Qw/profile-displayphoto-shrink_800_800/0/1516916405275?e=1629936000&v=beta&t=Nh_VHh51G_tHNbzJxFLHbdsjNDIvHug9QlE2NsgBeCg',
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

const leaderboard: Leaderboard = {
  people: [
    {
      id: '1',
      fullname: 'Oliver Tuck',
      photoURL:
        'https://media-exp3.licdn.com/dms/image/C4E03AQFYXr7syI_2Qw/profile-displayphoto-shrink_800_800/0/1516916405275?e=1629936000&v=beta&t=Nh_VHh51G_tHNbzJxFLHbdsjNDIvHug9QlE2NsgBeCg',
      jobTitle: 'Software Engineer',
      pointsChange: 100,
    },
    {
      id: '2',
      fullname: 'Derek Aryiku',
      photoURL:
        'https://media-exp3.licdn.com/dms/image/C4E03AQEFuqK0OnWVjw/profile-displayphoto-shrink_800_800/0/1559908113220?e=1629331200&v=beta&t=nHUjvGcxXRhlCEkzcP-r7cLLAUzOnNRajLliSJ4TjZc',
      jobTitle: 'Strategic Accounts',
      pointsChange: 200,
    },
  ],
  teams: [
    {
      id: '1',
      name: 'Development Team',
      members: [
        {
          id: '1',
          fullname: 'Oliver Tuck',
          photoURL:
            'https://media-exp3.licdn.com/dms/image/C4E03AQFYXr7syI_2Qw/profile-displayphoto-shrink_800_800/0/1516916405275?e=1629936000&v=beta&t=Nh_VHh51G_tHNbzJxFLHbdsjNDIvHug9QlE2NsgBeCg',
          jobTitle: 'Software Engineer',
        },
      ],
      photoURL: 'https://media-exp3.licdn.com/dms/image/C4E03AQFYXr7syI_2Qw/profile-displayphoto-shrink_800_800/0/1516916405275?e=1629936000&v=beta&t=Nh_VHh51G_tHNbzJxFLHbdsjNDIvHug9QlE2NsgBeCg',
      pointsChange: 100,
    },
  ],
};

const company: Company = {
  people: [
    {
      id: '1',
      fullname: 'Oliver Tuck',
      photoURL:
        'https://media-exp3.licdn.com/dms/image/C4E03AQFYXr7syI_2Qw/profile-displayphoto-shrink_800_800/0/1516916405275?e=1629936000&v=beta&t=Nh_VHh51G_tHNbzJxFLHbdsjNDIvHug9QlE2NsgBeCg',
      jobTitle: 'Software Engineer',
    },
    {
      id: '2',
      fullname: 'Derek Aryiku',
      photoURL:
        'https://media-exp3.licdn.com/dms/image/C4E03AQEFuqK0OnWVjw/profile-displayphoto-shrink_800_800/0/1559908113220?e=1629331200&v=beta&t=nHUjvGcxXRhlCEkzcP-r7cLLAUzOnNRajLliSJ4TjZc',
      jobTitle: 'Strategic Accounts',
    },
  ],
  teams: [
    {
      id: '1',
      name: 'Development Team',
      members: [
        {
          id: '1',
          fullname: 'Oliver Tuck',
          photoURL:
            'https://media-exp3.licdn.com/dms/image/C4E03AQFYXr7syI_2Qw/profile-displayphoto-shrink_800_800/0/1516916405275?e=1629936000&v=beta&t=Nh_VHh51G_tHNbzJxFLHbdsjNDIvHug9QlE2NsgBeCg',
          jobTitle: 'Software Engineer',
        },
      ],
      photoURL:
        'https://media-exp3.licdn.com/dms/image/C4E03AQFYXr7syI_2Qw/profile-displayphoto-shrink_800_800/0/1516916405275?e=1629936000&v=beta&t=Nh_VHh51G_tHNbzJxFLHbdsjNDIvHug9QlE2NsgBeCg',
    },
  ],
};

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
          <CompanyCard company={company} />
        </div>
      }
    />
  </>
);

export default Home;
