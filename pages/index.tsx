import { NextPage } from 'next';

import Home from './home'
import { data } from '../data.js';

interface IndexProps {
  userAgent: string;
  data: Object;
}

const Index: NextPage<IndexProps> = ({}) => {
  return (
    <Home data={data.basics}/>
  );
};

export default Index;