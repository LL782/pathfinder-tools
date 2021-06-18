import React from "react";

import { Header } from "./Header";
import { InviteToEditOnGitHub } from "../WebsiteMeta/InviteToEditOnGithub";

export const Main = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <InviteToEditOnGitHub />
  </>
);
