import { NextPage } from 'next';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Head from 'next/head';

interface ProjectsProps {

}

const Projects: NextPage<ProjectsProps> = ({

}) => {
  return(
    <Layout>
      <Head>
        <meta name="description" content="About me, my projects, and my blog"/>
        <title>Perry Raskin | Projects</title>
      </Head>
      <Section>
        <h1>Projects</h1>
        <p>
        This page will soon list my projects in an aesthetically pleasing format. Stay tuned...
        </p>
      </Section>
    </Layout>
  )
}

export default Projects;