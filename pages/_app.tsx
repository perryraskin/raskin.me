import App from 'next/app';
import Head from 'next/head';
import * as React from 'react';
import '../styles/tailwind.css';

interface AppState {
  // state variables types go here
}

class MyApp extends App<{}, {}, AppState> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}
  
export default MyApp;