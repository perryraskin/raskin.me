import Head from "next/head";
import Link from "next/link";
import Newsletter from "components/Newsletter";

export default function Home() {
  return (
    <>
      <article className="w-full px-10 py-10 mb-20 overflow-y-auto max-w-[620px] mx-auto">
        <div className="flex items-start justify-center w-full mb-10 overflow-hidden rounded-lg max-h-[500px] shadow-xl">
          <img
            src="https://avatars1.githubusercontent.com/u/17967465?s=460&v=4"
            alt="Perry Raskin, WFH"
            title="Perry Raskin, WFH"
          />
        </div>
        <h2 className="mt-12 mb-6 text-3xl font-black md:text-5xl">
          <span className="text-gray-400">Hi, I'm </span>Perry Raskin!
        </h2>
        <div className="post-content">
          <p className="text-lg text-gray-500">
            I'm a full stack developer at{" "}
            <a target="_blank" href="https://www.coverdash.com">
              Coverdash
            </a>
            .
          </p>
          <p className="text-lg text-gray-500">
            I enjoy working on full stack applications using Next.js, Tailwind
            CSS, and other modern front-end technologies.
          </p>
          <p className="text-lg text-gray-500">
            Currently, I'm working on{" "}
            <a target="_blank" href="https://www.inviteable.app">
              Inviteable
            </a>
            , an event-planning tool for a gathering of any size (in person or
            online). I'm also working on{" "}
            <a target="_blank" href="https://www.buyerdash.app">
              BuyerDash
            </a>
            , a platform for tracking online purchases.
          </p>
        </div>
        <div className="mt-8 mb-8 text-gray-200 text-center">
          ________________________________
        </div>
        <Newsletter />
      </article>
    </>
  );
}
