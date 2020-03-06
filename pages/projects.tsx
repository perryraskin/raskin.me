import { NextPage } from 'next';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

interface ProjectsProps {
  repos: Array<RepoDetails>;
}

interface RepoDetails {
  id: string;
  name: string;
  description: string;
  url: string;
  homepage: string;
  language: string;
  stars: string;
  forks: string;
  isForked: boolean;
}

const Projects: NextPage<ProjectsProps> = ({
  repos
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
        A list of projects I've recently been working on.
        </p>
      </Section>
      <Section extend="mt-0">
        <div className="flex flex-wrap -mx-2">
          {repos.map((repo: RepoDetails) => {
            const id = repo.id;
            const name = repo.name;
            const description = repo.description;
            const url = repo.url;
            const homepage = repo.homepage;
            const language = repo.language;
            const stars = repo.stars;
            const forks = repo.forks;

            return (
              <ProjectCard
                key={id}
                repoName={name}
                description={description}
                url={url}
                homepage={homepage}
                language={language}
                stars={stars}
                forks={forks}
              />
            );
          })}
        </div>
      </Section>
    </Layout>
  )
}

Projects.getInitialProps = async () => {
  // ctx contains the query param
  const resOrg = await fetch('https://api.github.com/orgs/shmobs/repos');
  const dataOrg = await resOrg.json();

  const orgRepos = dataOrg.map((repo: any) => {
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      isForked: repo.fork
    }
  })

  const res = await fetch('https://api.github.com/users/perryraskin/repos');
  const data = await res.json();

  console.log(`Show repos fetched. Count: ${data.length}`);

  const repos = data.map((repo: any) => {
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      isForked: repo.fork
    }
  })

  const filteredRepos = repos.filter((repo: any) => !repo.isForked);
  const combinedRepos = Array.prototype.push.apply(orgRepos,filteredRepos);
  const allRepos = orgRepos;

  return {
    repos: allRepos
  };
}

export default Projects;