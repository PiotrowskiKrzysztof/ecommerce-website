import CategorySection from "@components/organisms/CategorySection";
import { GetPageQuery_allPage } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import React from "react";

interface Props {
  sections: GetPageQuery_allPage["sections"];
}

const Sections: React.FC<Props> = ({ sections }) => {
  return (
    <>
      {sections?.map((section) => {
        switch (section?.__typename) {
          case "CategorySection": {
            return <CategorySection {...section} />;
          }
          default:
            return null;
        }
      })}
    </>
  );
};

export default Sections;
