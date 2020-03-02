import { NextPage } from 'next';
import Layout from '../components/Layout';
import Section from '../components/Section';

interface ProjectsProps {

}

const Projects: NextPage<ProjectsProps> = ({

}) => {
  return(
    <Layout>
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