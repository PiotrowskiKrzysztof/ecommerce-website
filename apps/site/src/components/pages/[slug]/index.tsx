import { NextPage } from "next";

import { Props } from "./types";

const Page: NextPage<Props> = ({ title }) => (
  <div>
    <h1>{title}</h1>
  </div>
);

export default Page;

/// #if !CLIENT_BUNDLE

export { getStaticPaths, getStaticProps } from "./utils";

/// #endif
