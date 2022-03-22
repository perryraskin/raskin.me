import { BlogList } from "components";
import { getAllPosts } from "pages/api/blog";
import { NextSeo } from "next-seo";

export default function Blog({ allPosts }) {
  return (
    <>
      <NextSeo
        title="Blog - Perry Raskin"
        description="I'm a designer and front-end engineer by profession. I like to travel, take photos and binge try Cafes and Restaurants."
        openGraph={{
          site_name: "Blog - Perry Raskin",
          title: "Blog - Perry Raskin",
          description:
            "I'm a designer and front-end engineer by profession. I like to travel, take photos and binge try Cafes and Restaurants.",
        }}
        twitter={{
          handle: "@perryraskin",
          site: "@perryraskin",
          cardType: "summary_large_image",
        }}
      />

      <BlogList data={allPosts} />
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
    "external",
  ]);

  return {
    props: { allPosts },
  };
}
