import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";

import { Header } from "../Layout/Header";
import { InviteToEditOnGitHub } from "../WebsiteMeta/InviteToEditOnGithub";

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
    <Header />
    <Component {...pageProps} />

    <InviteToEditOnGitHub />

    <hr />
    <p>
      Copyright &copy; {new Date().getFullYear()} Laurence Lord -{" "}
      <a href="http://www.gnu.org/licenses/">GNU General Public License</a>
    </p>
  </>
);

export default MyApp;
