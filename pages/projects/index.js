import { NextSeo } from "next-seo";
import { WorkList } from "components";
import { getAllPosts } from "pages/api/projects";

export default function Home({ allPosts }) {
  return (
    <>
      <NextSeo
        title="Work – Perry Raskin"
        description="A list of all my side-projects, mostly written in React.js, React Native, Next.js and TailwindCSS."
        openGraph={{
          site_name: "Work – Perry Raskin",
          title: "Work – Perry Raskin",
          description:
            "A list of all my side-projects, mostly written in React.js, React Native, Next.js and TailwindCSS.",
        }}
        twitter={{
          handle: "@perryraskin",
          site: "@perryraskin",
          cardType: "summary_large_image",
        }}
      />

      <WorkList allPosts={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "icon",
  ]);

  return {
    props: { allPosts },
  };
}
