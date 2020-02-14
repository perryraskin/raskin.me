import { NextPage } from 'next';
import glamorous from 'glamorous';

import { colors, mediaQueries } from '.././styles';

import * as React from 'react';


const LandingContainer = glamorous.div({
  minHeight: 'calc(100vh - 7rem)',
  marginTop: '8rem',
  [mediaQueries.tablet]: {
    marginTop: 0,
  },
});

const Container = glamorous.div({
  minHeight: 'inherit',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  '& .info-tooltip': {
    maxWidth: '50%',
    marginTop: '-1rem',
    background: '#fff',
    opacity: 1,
  },
});

const WelcomeText = glamorous.h5({
  color: colors.landingPage.welcomeText,
  textAlign: 'center',
  letterSpacing: '1px',
  padding: 0,
  margin: 0,
  marginBottom: '1rem',
  fontWeight: 'bold',
});

const Title = glamorous.h1({
  color: colors.landingPage.foreground,
  letterSpacing: '5px',
  textAlign: 'center',
  padding: 0,
  margin: 0,
  marginBottom: '2rem',
  fontFamily: 'Raleway, Lato, sans-serif',
});

const InfoLabel = glamorous.h6({
  textAlign: 'center',
  letterSpacing: '1px',
  padding: 0,
  margin: 0,
  color: colors.landingPage.infolabel,
  marginBottom: '3rem',
  textTransform: 'uppercase',
  fontWeight: 'bold',
});

const ButtonContainer = glamorous.div({
  textAlign: 'center',
});

const Button = glamorous.a({
  color: `${colors.landingPage.foreground} !important`,
  marginLeft: '0.7rem !important',
  marginRight: '0.7rem !important',

  ':hover': {
    color: `${colors.landingPage.hoverForeground} !important`,
    background: 'rgba(0,0,0,0.1) !important',
    borderColor: `${colors.landingPage.infolabel} !important'`,
  },

  ':active': {
    color: `${colors.landingPage.hoverForeground} !important`,
    background: 'rgba(0,0,0,0.2) !important',
    borderColor: `${colors.landingPage.infolabel} !important'`,
  },
});

const LinkContainer = glamorous.div({
  marginTop: '4rem',
  marginBottom: '10rem',

  color: colors.landingPage.foreground,
  textAlign: 'center',

  '& i': {
    color: colors.landingPage.foreground,
  },

  '& a': {
    color: colors.landingPage.foreground,
    textDecoration: 'none',
  },

  '& a:hover': {
    color: colors.landingPage.infolabel,
    textDecoration: 'none',
  },

  [mediaQueries.tablet]: {
    marginBottom: '6rem',
  },
});

interface IProfile {
    network: string;
    username: string;
    url: string;
}

interface LandingComponentProps {
    name: string;
    infoLabel: string;
    profiles: IProfile[];
    email: string;
}

interface LandingComponentState {
  height: string;
}

const LandingComponent: NextPage<LandingComponentProps> = ({
    name,
    infoLabel,
    profiles,
    email
}) => {

  const profileSeparator = ' • ';

  return (
      <LandingContainer>
        <Container>
          <div className="container">
            <WelcomeText>THANKS FOR STOPPING BY</WelcomeText>
            <WelcomeText>• • •</WelcomeText>
            <Title>{name}</Title>
            <InfoLabel>{infoLabel}</InfoLabel>
            <ButtonContainer>
              <Button
                className="button"
                href="https://blog.raskin.me"
              >
                BLOG
              </Button>
              <Button 
                className="button" 
                href="../assets/Perry_Raskin_Resume.pdf"
                >RESUME
              </Button>
            </ButtonContainer>
            <LinkContainer>
              {profiles.map((profile: IProfile, index: number) => {
                return (index === profiles.length - 1) ?
                  <a key={index} href={profile.url}>{profile.network}</a> :
                  <span key={index}>
                    <a href={profile.url}>{profile.network}</a>{profileSeparator}
                  </span>;
              })}
              <br/>
              <a href={`mailto:${email}`}>{email}</a>
            </LinkContainer>
          </div>
        </Container>
      </LandingContainer>
    );
}

export default LandingComponent;