import { ExternalLinkIcon } from "lib/icons";
import dayjs from "dayjs";
import Newsletter from "./Newsletter";

export default function PostContent({ post }) {
  return (
    <div className="inline-flex flex-col items-center justify-start w-full h-screen px-10 pt-10 pb-32 overflow-y-auto">
      <div className="text-center text-gray-400 dark:text-gray-600">
        {dayjs(post?.date.slice(0, 10)).format("MMMM D, YYYY")}
      </div>
      <h1 className="text-3xl mb-6 font-black md:text-4xl text-center max-w-[620px] mx-auto">
        {post.title}
      </h1>
      {post?.link && post?.image ? (
        <div className="max-w-[620px] mx-auto">
          <a href={post?.link} target="_blank">
            <img src={post.image} className="mb-6 rounded-lg" />
          </a>
        </div>
      ) : (
        ""
      )}
      <div
        dangerouslySetInnerHTML={{ __html: post?.content }}
        className="inline-block mx-auto post-content"
      />
      {post?.link ? (
        <a
          href={post?.link}
          target="_blank"
          className="w-full py-1 bg-black rounded-lg shadow-lg max-w-[620px] text-white text-lg text-center flex items-center justify-center dark:bg-white dark:text-black"
        >
          <span className="w-5 h-5 mr-2">{ExternalLinkIcon}</span>
          <span>Visit Link</span>
        </a>
      ) : (
        ""
      )}

      <div className="mt-4 text-gray-200">
        ______________________________________________
      </div>
      <div className="mb-4 mt-10 post-content">
        <Newsletter />
      </div>
    </div>
  );
}
