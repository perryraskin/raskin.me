import { NextPage } from 'next';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Tag from '../components/Tag';

import { data } from '../data.js';

interface AboutProps {
  userAgent?: string;
  data: UserInfo;
}

interface UserInfo {
  name: string;
  label: string;
}

const interests = {
  "like": [
    "Traveling",
    "Codecations",
    "Credit Cards",
    "Cinnabon",
    "Podcasts",
    "Smart Home",
    "React",
    "Sitcoms",
    "Coffee",
    "Comicbook Heroes"
  ],
  "dislike": [
    "Coffee",
    "Stock Photos",
    "Noise",
    "Notifications",
    "Driving",
    "Strong Beliefs",
    "Windows",
    "Overtime",
    "Narrow-minded",
    "Advertisments",
    "Reality TV",
    "Group chats"
  ]
}

const About: NextPage<AboutProps> = ({
  userAgent,
  data
}) => {
  return (
    <Layout>
      <Section>
        <h1>About Me</h1>
        <div className="flex flex-wrap">
          <p className="measure md:w-3/4 pr-12">
            I've been a techie for as long as I can remember. You know, that guy 
            all my friends and family call when they need advice on a new phone or 
            computer problem. But for real, I'm a developer, and I pretty much always 
            feel that there's too much to learn. Every month I'm on a new topic or tech stack.
            I studied Computer Science at Queens College in New York, and that's
            where I live today.
          </p>
          <img 
            className="h-full md:w-1/4 w-3/4 rounded-lg shadow" 
            src="https://avatars1.githubusercontent.com/u/17967465?s=460&v=4" 
          />
        </div>
      </Section>
      <Section>
        <h2>Work Talk</h2>
        <p className="measure">
          I'm a full stack .NET developer at an extended warranty company, <a href="https://cpscentral.com">Consumer Priority Service (CPS)</a>.
          When I'm not at the office, I'm hacking away on side projects. Often, this
          is a super fun pair programming effort with some good friends of mine.
        </p>
      </Section>
      <Section>
        <h2>All Things Me</h2>
        <div className="-my-2">
          {interests.like.map(el => (
            <Tag text={el} />
          ))}
        </div>
      </Section>
      {/* <Section extend="mb-10">
        <h2 className="block">☹️</h2>
        <div className="-my-2">
          {interests.dislike.map(el => (
            <Tag text={el} />
          ))}
        </div>
      </Section> */}
    </Layout>
  );
};

export default About;