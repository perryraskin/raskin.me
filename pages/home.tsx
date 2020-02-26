import { NextPage } from 'next';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import { Twitter, GitHub, Linkedin } from "react-feather";

import { data } from '../data.js';

interface HomeProps {
  userAgent?: string;
  data?: UserInfo;
}

interface UserInfo {
  name: string;
  label: string;
}

const Home: NextPage<HomeProps> = ({
  userAgent,
  data
}) => {
  return (
    <Layout>
      <Section>
      <p className="text-gray-600 dark:text-neutral-300 text-2xl md:text-4xl">
        Thanks for stopping by! 👋
      </p>
      <h2 className="text-4xl md:text-6xl leading-tight font-bold dark:text-neutral-10 mb-8 border-b-0">
        I’m Perry Raskin. Full stacking. Side projecting. Learning.
      </h2>
      <Button
        text=""
        icon={<Linkedin/>}
        to="https://linkedin.com/in/perryraskin"
        extend="bg-blue-700 text-white"
      />&nbsp;&nbsp;&nbsp;
      <Button
        text=""
        icon={<GitHub/>}
        to="https://github.com/perryraskin?tab=repositories"
        extend="bg-black text-white"
      />&nbsp;&nbsp;&nbsp;
      <Button
        text=""
        icon={<Twitter />}
        to="https://twitter.com/perryraskin"
        extend="bg-blue-400 text-white"
      />
    </Section>
  </Layout>
  );
};

export default Home;