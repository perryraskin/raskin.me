import React, { createRef } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

import Section from '../components/Section';
import Subscribe from '../components/Subscribe';

const url = "https://raskin.us19.list-manage.com/subscribe/post?u=215db57bccd5e8ac098d96353&amp;id=51e8db47ba";

const Newsletter = () => {
  const emailRef = createRef(undefined)

  return (
    <Section extend="mt-0">
      <hr></hr>
      <div className="p-8 text-center">
        <div>
          <strong className="text-2xl">Subscribe, if you'd like 🙂</strong>
          <p>
          I'll send out an email only when I publish a new blog post. 
          No spam, just great content! <b>I never share your email address with anyone.</b>
          </p>
        </div>
        <div>
          <Subscribe buttonText="Subscribe" keepLeft=""/>
        </div>
      </div>
      <hr></hr>
    </Section>
  )
}

export default Newsletter;