import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";

const GlobalStyles = () => (
  <style jsx global>{`
    body {
      margin: 1rem;
    }
  `}</style>
);

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default MyApp;
