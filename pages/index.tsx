import { NextPage } from 'next';
import glamorous from 'glamorous';

import { colors, mediaQueries } from '.././styles';

import LandingComponent from '../components/LandingComponent';
import { data } from '../data.js';

interface HomeProps {
  userAgent: string;
  data: Object;
}

const Container = glamorous.div({
  [mediaQueries.tablet]: {
    marginBottom: '10rem',
  },
  '& section': {
    [mediaQueries.tablet]: {
      maxWidth: '80%',
      margin: 'auto',
    },
  },
  '& .columns': {
    [mediaQueries.untilDesktop]: {
      width: '100% !important',
      marginLeft: '0 !important',
    },
  },
});

const Background = glamorous.div({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: -1,
  backgroundColor: colors.black,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
});

const Home: NextPage<HomeProps> = ({}) => {
  return (
    <div
      className="w-screen h-screen bg-gray-800"
    >
      <Background/>
        <Container>
          <LandingComponent
            name={data.basics.name}
            infoLabel={data.basics.label}
            profiles={data.basics.profiles}
            email={data.basics.email}
          />
        </Container>
    </div>
  );
};

export default Home;