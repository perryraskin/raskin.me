import { NextPage } from 'next';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import Subscribe from '../components/Subscribe';

import { Twitter, GitHub, Linkedin, Mail } from "react-feather";

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
      <Section extend="text-center lg:text-left">
      <p className="text-gray-600 dark:text-neutral-300 text-2xl md:text-4xl">
        Thanks for stopping by! 👋
      </p>
      <h2 className="text-4xl md:text-6xl leading-tight font-bold dark:text-neutral-10 mb-8 border-b-0">
        I’m Perry Raskin.<br />
        Full stacking.<br />
        Side projecting.<br />
        Learning.
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
        to="https://github.com/perryraskin"
        extend="bg-black text-white"
      />&nbsp;&nbsp;&nbsp;
      <Button
        text=""
        icon={<Twitter />}
        to="https://twitter.com/perryraskin"
        extend="bg-blue-400 text-white"
      />&nbsp;&nbsp;&nbsp;
      <Button
        text=""
        icon={<Mail />}
        to="mailto:perry@raskin.me"
        extend="bg-gray-500 text-white"
      />
    </Section>
    <Section>
      <hr></hr>
      <h2 className="text-center text-3xl md:text-4xl leading-tight font-bold dark:text-neutral-10 mb-8 border-b-0">
        Newsletter
      </h2>
      <p className="text-center">
      I'll send out an email only when I publish a new blog post. 
      No spam, just great content! <br/><b>I never share your email address with anyone.</b>
      </p>
      <Subscribe buttonText="Subscribe" keepLeft="" />
    </Section>
  </Layout>
  );
};

export default Home;