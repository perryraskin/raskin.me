import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import Section from '../components/Section';

import matter from 'gray-matter';

import BlogPostCard from '../components/BlogPostCard';

interface BlogProps {
  posts: Array<PostObject>;
}

interface PostObject {
  document: any;
  slug: string;
}

interface PostData {
  data: PostInfo;
}

interface PostInfo {
  title: string;
  subtitle: string;
  date: string;
  timeToRead: string;
}

export function reformatDate(fullDate: string) {
  const date = new Date(fullDate);
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric', day: 'numeric' });
}

export function getReadTime(content: string) {
  const wordsPerMinute = 200; // Average case.
  let value = 1;
  
  let textLength = content.split(" ").length; // Split by words
  if (textLength > 0){
    value = Math.ceil(textLength / wordsPerMinute);
  }

  return value;
}

const Blog: NextPage<BlogProps> = ({
  posts
}) => {
  return(
    <Layout>
      <Head>
        <meta name="description" content="About me, my projects, and my blog"/>
        <title>Perry Raskin | Blog</title>
      </Head>
      <Section>
        <h1>Blog</h1>
        <p>
        This is my personal blog. 
        I hope to share what I'm learning, along with ideas I'm passionate about.
        Feel free to share your thoughts or ask questions!
        </p>
      </Section>
      <Section extend="mt-0">
        <div className="flex flex-wrap -mx-2">
          {posts.map((post) => {
            const title = post.document.data.title;
            const timeToRead = getReadTime(post.document.content).toString();
            const subtitle = post.document.data.subtitle;
            const slug = post.slug;
            const date = post.document.data.date;

            return (
              <BlogPostCard
                key={slug}
                title={title}
                subtitle={subtitle}
                timeToRead={timeToRead}
                slug={`/blog/${slug}`}
                date={reformatDate(date)}
              />
            );
          })}
        </div>
      </Section>
    </Layout>
  )
}

Blog.getInitialProps = async => {
  // ctx contains the query param
  // get all .md files from the src/posts dir
  const posts = (context => {
    // grab all the files matching this context
    const keys = context.keys();
    // grab the values from these files
    const values = keys.map(context);
    // go through each file
    const data = keys.map((key: any, index: any) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      // get the current file value
      const value: any = values[index];
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default);
      
      // return the .md content & pretty slug
      return {
        document,
        slug,
      }
    })
    // return all the posts
    return data
  })(require.context('../posts', true, /\.md$/));
  
  return {
    posts: posts,
  }
}

export default Blog;