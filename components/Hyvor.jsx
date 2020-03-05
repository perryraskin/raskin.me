import React from 'react';

import HyvorTalk from 'hyvor-talk-react';

function Hyvor({ websiteId }) {
  return (
    <HyvorTalk.Embed 
        websiteId={websiteId}
      />
  )
}

export default Hyvor;