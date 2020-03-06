import { NextPage } from 'next';
import Link from 'next/link';

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
            <h3 className="mt-0 text-3xl hover:underline">{repoName}</h3>
            <p className="text-xl leading-tight text-neutral-500 dark:text-neutral-200">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            <button className="px-3 py-1 text-sm font-semibold uppercase rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-500 dark:text-primary-50">
              {language}
            </button>
            <span className="my-auto text-sm font-semibold text-neutral-200 hover:text-blue-500">
              <a href={homepage}>{homepage}</a>
            </span>
          </div>
        </article>
      </a>
    </Link>
  );
}

export default ProjectCard;
