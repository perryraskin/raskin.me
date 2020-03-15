import { NextPage } from 'next';
import Head from 'next/head';
import matter from 'gray-matter';
import styled from 'styled-components';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Highlight from 'react-highlight';

import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Newsletter from '../../components/Newsletter';
import Hyvor from '../../components/Hyvor';
import SocialButtons from '../../components/SocialButtons';

import { reformatDate } from '../blog';

import "../../styles/prism-theme.css";
import "../../styles/markdown.css";
import "../../styles/nord.css";

interface BlogTemplateProps {
  result: BlogPost;
}

interface BlogPost {
  content: string;
  data: Data;
}

interface Data {
  url: string;
  title: string;
  date: string;
  subtitle: string;
  socialimage: string;
}

const Blockquote = styled.blockquote.attrs({
  className: "my-8 py-4 px-4 bg-white border-l-2 border-primary-700 text-primary-900 shadow rounded-lg"
})``;

const OrderedList = styled.ol.attrs({
  className: "list-disc bg-white text-primary-900 my-6 py-4 pl-12 pr-6 rounded-lg shadow"
})``;

const Code = styled.code`
  font-size: 90%;
  line-height: 1.2em;
  font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;

  display: inline; 
  color: #555555;
  padding: 1em 1em;
  background: #f4f4f4;
`;

const inlineCode = styled.code.attrs({
  className: "bg-gray-300 text-primary-900 text-base my-0 py-0 pl-2 pr-2 rounded-lg shadow-xs"
})``;

interface CodeBlockProps {
  value: any;
}

const CodeBlock: NextPage<CodeBlockProps> = ({ value }) => {
  return (
    <div>
      <Highlight>
        {value}
      </Highlight>
      <br />
    </div>
  )
}

const BlogTemplate: NextPage<BlogTemplateProps> = ({ result }) => {
  // data from getInitialProps
  const markdownBody = result.content
  const frontmatter = result.data
  return (
    <Layout>
      <Head>
        {/* General tags */}
        <meta key="description" property="description" content={frontmatter.subtitle}/>
        <title>{frontmatter.title}</title>
        {/* OpenGraph tags */}
        <meta key="og:url" property="og:url" content={frontmatter.url} />
        <meta key="og:title" property="og:title" content={frontmatter.title} />
        <meta key="og:description" property="og:description" content={frontmatter.subtitle} />
        <meta key="og:image" property="og:image" content={frontmatter.socialimage} />
        <meta key="og:type" property="og:type" content="website" />
        {/* Twitter Card tags */}
        <meta key="twitter:title" property="twitter:title" content={frontmatter.title} />
        <meta key="twitter:description" property="twitter:description" content={frontmatter.subtitle} />
        <meta key="twitter:image" property="twitter:image" content={frontmatter.socialimage} />
        <meta key="twitter:card" property="twitter:card" content="summary" />
      </Head>
      <Section>
        <article className="mb-10 markdown">
          <SocialButtons frontmatter={frontmatter} extend="text-center lg:text-right" />
          <header>
            <h1 className="text-5xl">{frontmatter.title}</h1>
          </header>
          <div className="mb-5 my-auto text-sm font-semibold text-neutral-400">
            <div>{reformatDate(frontmatter.date)}</div>
          </div>
          <div className="mb-5 my-auto text-sm text-right font-semibold text-neutral-400">
            
          </div>
          <div>
            <ReactMarkdown 
              source={markdownBody}
              renderers={{
                code: CodeBlock
              }}
            />
          </div>
        </article>
        <SocialButtons frontmatter={frontmatter} extend="text-center" />
        <Newsletter/><br/><br/>
        <Hyvor websiteId={262} />
      </Section>
    </Layout>
  )
};

BlogTemplate.getInitialProps = async ctx => {
  // ctx contains the query param
  const { slug, handle } = ctx.query
  // super weird that sometimes it's slug and sometimes it's handle
  let blogPost = typeof slug === 'undefined' ? handle : slug
  // grab the file in the posts dir based on the slug
  const content = await import(`../../posts/${blogPost}.md`);
  // also grab the config file so we can pass down siteTitle
  //const config = await import(`../../data/config.json`)
  //gray-matter parses the yaml frontmatter from the md body
  const result = matter(content.default)
  
  return {
    result: {
      content: result.content,
      data: {
        url: `https://raskin.me/blog/${blogPost}`,
        title: result.data.title,
        date: result.data.date,
        subtitle: result.data.subtitle,
        socialimage: result.data.socialimage
      }
    }
  }
}

export default BlogTemplate;