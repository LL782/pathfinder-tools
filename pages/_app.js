const MyApp = ({ Component, pageProps }) => (
  <>
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}</style>
    <Component {...pageProps} />
  </>
);

export default MyApp;
