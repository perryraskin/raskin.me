import { NextPage } from 'next';
import Link from 'next/link';

import NextOcticon from '../components/NextOcticon';

interface ProjectCardProps {
  repoName: string;
  description: string;
  url: string;
  homepage: string;
  language: string;
  stars: string;
  forks: string;
}

const ProjectCard: NextPage<ProjectCardProps> = ({
  repoName,
  description,
  url,
  homepage,
  language,
  stars,
  forks
}) => {
  return (
    <Link
      href={url}
    >
      <a className="w-full px-2 my-2 overflow-hidden overflow-visible md:my-2 md:px-2 md:w-1/2 h-65" href={url}>
        <article className="flex flex-col items-start justify-between h-full p-6 bg-white rounded-lg shadow dark:bg-neutral-700">
          <div>
            <h3 className="mt-0 text-3xl hover:underline">
              <NextOcticon name="mark-github" size='medium'/> {repoName}
            </h3>
            <p className="text-xl leading-tight text-neutral-500 dark:text-neutral-200">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            <button className="px-3 py-1 text-sm font-semibold uppercase rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-500 dark:text-primary-50">
              {language}
            </button>
            <span className="my-auto text-sm font-semibold">
            <a href={homepage} className={homepage === "" ? `invisible` : `hover:text-blue-500`}
              ><NextOcticon name="link" size='small'/></a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <NextOcticon name="repo-forked" size='small'/> {forks}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <NextOcticon name="star" size='small'/> {stars}
            </span>
          </div>
        </article>
      </a>
    </Link>
  );
}

export default ProjectCard;
