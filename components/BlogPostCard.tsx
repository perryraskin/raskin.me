import { NextPage } from 'next';
import Link from 'next/link';

interface BlogPostCardProps {
  title: string;
  subtitle: string;
  timeToRead: string;
  slug: string;
  date: string;
}

const BlogPostCard: NextPage<BlogPostCardProps> = ({
  title, 
  subtitle, 
  timeToRead, 
  slug, 
  date 
}) => {
  return (
    <Link
      href={slug}
    >
      <a className="w-full px-2 my-2 overflow-hidden overflow-visible md:my-2 md:px-2 md:w-1/2 h-65" href={slug}>
        <article className="flex flex-col items-start justify-between h-full p-6 bg-white rounded-lg shadow dark:bg-neutral-700">
          <div>
            <h3 className="mt-0 text-3xl">{title}</h3>
            <p className="text-xl leading-tight text-neutral-500 dark:text-neutral-200">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            <button className="px-3 py-1 text-sm font-semibold uppercase rounded-lg bg-primary-50 text-primary-600 dark:bg-primary-500 dark:text-primary-50">
              {timeToRead} min
            </button>
            <span className="my-auto text-sm font-semibold text-neutral-200">
              {date}
            </span>
          </div>
        </article>
      </a>
    </Link>
  );
}

export default BlogPostCard;
