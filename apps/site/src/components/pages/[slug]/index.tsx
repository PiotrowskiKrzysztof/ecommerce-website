import Sections from "@components/misc/Sections";
import CategorySection from "@components/organisms/CategorySection";
import { NextPage } from "next";

import { Props } from "./types";

const Page: NextPage<Props> = ({ title, sections }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Sections sections={sections} />
    </div>
  );
};

export default Page;

/// #if !CLIENT_BUNDLE

export { getStaticPaths, getStaticProps } from "./utils";

/// #endif
