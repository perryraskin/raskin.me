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
        <meta name="personal website" content="About me, my projects, and my blog"/>
        <title>Perry Raskin</title>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.0-beta.3/default/snipcart.css" />
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