import { NextPage } from 'next';
import matter from 'gray-matter';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import Section from '../../components/Section';

import { reformatDate } from '../blog';

import "../../styles/prism-theme.css";
import "../../styles/markdown.css";

interface BlogTemplateProps {
  result: BlogPost;
}

interface BlogPost {
  content: string;
  data: Data;
}

interface Data {
  title: string;
  date: string;
  subtitle: string;
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

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
  font-family: 'Courier New', Courier, monospace;
`;

const BlogTemplate: NextPage<BlogTemplateProps> = ({ result }) => {
  // data from getInitialProps
  const markdownBody = result.content
  const frontmatter = result.data

  var Converter = require('react-showdown').Converter;
  var converter = new Converter();
  
  var reactElement = converter.convert(markdownBody);
  return (
    <Layout>
      <Section>
        <article className="mb-10 markdown">
          <header>
            <h1 className="text-5xl">{frontmatter.title}</h1>
          </header>
          <div className="mb-5 my-auto text-sm font-semibold text-neutral-400">
              {reformatDate(frontmatter.date)}
            </div>
          <div>
            <ReactMarkdown 
              source={markdownBody}
              renderers={{
                blockquote: Blockquote,
                pre: Pre,
                list: OrderedList
              }}
            />
          </div>
        </article>
      </Section>
    </Layout>
  )
};

BlogTemplate.getInitialProps = async ctx => {
  // ctx contains the query param
  const { slug } = ctx.query
  // grab the file in the posts dir based on the slug
  const content = await import(`../../posts/${slug}.md`)
  // also grab the config file so we can pass down siteTitle
  //const config = await import(`../../data/config.json`)
  //gray-matter parses the yaml frontmatter from the md body
  const result = matter(content.default)
  console.log("result:", result)
  return {
    result: {
      content: result.content,
      data: {
        title: result.data.title,
        date: result.data.date,
        subtitle: result.data.subtitle
      }
    }
  }
}

export default BlogTemplate;