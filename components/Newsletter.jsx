import React, { createRef } from "react";

import Subscribe from "../components/Subscribe";

const Newsletter = () => {
  return (
    <div>
      <div className="p-8 text-center">
        <div>
          <strong style={{ fontSize: "24px" }}>Subscribe to updates?</strong>
          <p style={{ fontSize: "16px" }}>
            I'll send out an email only when I publish a new blog post. No spam,
            just great content!{" "}
            <b>I never share your email address with anyone.</b>
          </p>
        </div>
        <div>
          <Subscribe buttonText="Subscribe" keepLeft="" />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Newsletter;
