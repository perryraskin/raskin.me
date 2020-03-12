import App from 'next/app';
import * as React from 'react';
import Head from 'next/head';

import '../styles/tailwind.css';

interface AppState {
  // state variables types go here
}

class MyApp extends App<{}, {}, AppState> {
  componentDidMount() {
    //detect dark mode and enable tailwindcss-dark-mode
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    const htmlSelector = document.querySelector("html");
  
    if (!isDark.matches) {
      window.localStorage.setItem('THEME', 'light');
      htmlSelector?.classList.remove('mode-dark');
    }
    else {
      window.localStorage.setItem('THEME', 'dark');
      htmlSelector?.classList.add('mode-dark');
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          {/* General tags */}
          <meta key="description" property="description" content="About me, my projects, and my blog"/>
          <title key="title">Perry Raskin</title>
          {/* OpenGraph tags */}
          <meta key="og:url" property="og:url" content="https://raskin.me" />
          <meta key="og:title" property="og:title" content="Perry Raskin" />
          <meta key="og:description" property="og:description" content="About me, my projects, and my blog" />
          <meta key="og:image" property="og:image" content="https://res.cloudinary.com/raskin-me/image/upload/v1584056524/raskin.me/images/FBP-15_f2zqcr.jpg" />
          <meta key="og:type" property="og:type" content="website" />
          {/* Twitter Card tags */}
          <meta key="twitter:title" property="twitter:title" content="Perry Raskin" />
          <meta key="twitter:description" property="twitter:description" content="About me, my projects, and my blog" />
          <meta key="twitter:image" property="twitter:image" content="https://res.cloudinary.com/raskin-me/image/upload/v1584056524/raskin.me/images/FBP-15_f2zqcr.jpg" />
          <meta key="twitter:card" property="twitter:card" content="summary" />
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
}
  
export default MyApp;