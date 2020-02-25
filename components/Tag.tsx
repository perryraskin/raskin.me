import { NextPage } from 'next';

interface TagProps {
  text: string;
}

const Tag: NextPage<TagProps> = ({
  text
}) => {
  return (
    <span className="text-sm md:text-xl inline-block border border-gray-400 dark:border-gray-900 rounded py-2 px-4 ml-2 mt-2">
      {text}
    </span>
  )
}

export default Tag;
