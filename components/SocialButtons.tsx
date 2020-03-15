import { NextPage } from 'next';
import Link from 'next/link';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

interface SocialButtonsProps {
  frontmatter: any;
  extend?: string;
}

const SocialButtons: NextPage<SocialButtonsProps> = ({ frontmatter, extend }) => {
  return (
    <div className={extend}>
              <EmailShareButton 
                subject={frontmatter.title} 
                body={frontmatter.subtitle}
                separator={`\n\n`} 
                url={frontmatter.url}
              >
                <EmailIcon size={32} round={true} path="" />
              </EmailShareButton>&nbsp;
              <TwitterShareButton 
                title={frontmatter.title}
                url={frontmatter.url}
              >
                <TwitterIcon size={32} round={true} path="" />
              </TwitterShareButton>&nbsp;
              <FacebookShareButton 
                quote={frontmatter.title}
                url={frontmatter.url}
              >
                <FacebookIcon size={32} round={true} path="" />
              </FacebookShareButton>&nbsp;
              <LinkedinShareButton 
                title={frontmatter.title}
                summary={frontmatter.subtitle}
                source={frontmatter.url}
                url={frontmatter.url}
              >
                <LinkedinIcon size={32} round={true} path="" />
              </LinkedinShareButton>&nbsp;
              <PinterestShareButton 
                media={frontmatter.socialimage}
                description={frontmatter.subtitle}
                url={frontmatter.url}
              >
                <PinterestIcon size={32} round={true} path="" />
              </PinterestShareButton>&nbsp;
              <RedditShareButton 
                title={frontmatter.title}
                url={frontmatter.url}
              >
                <RedditIcon size={32} round={true} path="" />
              </RedditShareButton>&nbsp;
              <TelegramShareButton 
                title={frontmatter.title}
                url={frontmatter.url}
              >
                <TelegramIcon size={32} round={true} path="" />
              </TelegramShareButton>&nbsp;
              <WhatsappShareButton 
                title={frontmatter.title}
                separator={`\n\n`} 
                url={frontmatter.url}
              >
                <WhatsappIcon size={32} round={true} path="" />
              </WhatsappShareButton>&nbsp;
              <TumblrShareButton 
                title={frontmatter.title}
                caption={frontmatter.subtitle}
                url={frontmatter.url}
              >
                <TumblrIcon size={32} round={true} path="" />
              </TumblrShareButton>
            </div>
  );
}

export default SocialButtons;
