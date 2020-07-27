import React from "react";

const GlobalStyles = () => (
  <style jsx global>{`
    body {
      margin: 0;
    }
  `}</style>
);

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
);

export default MyApp;
