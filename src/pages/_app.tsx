import { AppProps } from "next/dist/shared/lib/router/router";
import React from "react";

import { Header } from "../components/Layout/Header";
import { InviteToEditOnGitHub } from "../components/Layout/InviteToEditOnGithub";

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
