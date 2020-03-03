import { NextPage } from 'next';
import Head from 'next/head';

import Home from './home'
import { data } from '../data.js';

interface IndexProps {
  userAgent: string;
  data?: DataBasics;
}

interface DataBasics {
  basics: Object;
}

const Index: NextPage<IndexProps> = ({}) => {
  return (
    <div>
      <Head>
        <meta name="description" content="About me, my projects, and my blog"/>
        <title>Perry Raskin | Home</title>
      </Head>
      <Home/>
    </div>
  );
};

Index.getInitialProps = async ctx => {
  const { req } = ctx;

  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
}

export default Index;