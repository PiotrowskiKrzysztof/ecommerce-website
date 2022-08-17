import CategorySection from "@components/organisms/CategorySection";
import HeroProductSection from "@components/organisms/HeroProductSection";
import ItemsSection from "@components/organisms/ItemsSection";
import React from "react";

import { Props } from "./types";

const Sections: React.FC<Props> = ({ sections }) => {
  return (
    <>
      {sections?.map((section) => {
        switch (section?.__typename) {
          case "CategorySection": {
            return <CategorySection {...section} />;
          }
          case "HeroProductSection": {
            return <HeroProductSection {...section} />;
          }
          case "ItemsSection": {
            return <ItemsSection {...section} />;
          }
          default:
            return null;
        }
      })}
    </>
  );
};

export default Sections;
