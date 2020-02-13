import { NextPage } from 'next';

interface HomeProps {
  userAgent: string;
}

const Home: NextPage<HomeProps> = ({
  userAgent = "",
}) => {
  return (
    <div
      className="w-screen h-screen bg-gray-900"
    >
      <h1
        className="text-white text-center text-3xl pt-16"
      >
        Hello world! - user agent: {userAgent}
      </h1>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  const { req } = ctx;

  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;