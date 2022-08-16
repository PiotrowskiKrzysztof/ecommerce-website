import Sections from "@components/misc/Sections";
import CategorySection from "@components/organisms/CategorySection";
import { NextPage } from "next";

import { Props } from "./types";

const Page: NextPage<Props> = ({ title, sections }) => {
  return (
    <div>
      <Sections sections={sections} />
    </div>
  );
};

export default Page;

/// #if !CLIENT_BUNDLE

export { getStaticPaths, getStaticProps } from "./utils";

/// #endif
