import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import ItemsSection from "./ItemsSection";
import product from "./product";
import blockContent from "./blockContent";
import blockContentLink from "./blockContentLink";
import category from "./category";
import brand from "./brand";
import mainCategory from "./mainCategory";
import page from "./page";
import categorySection from "./categorySection";
import heroProductSection from "./heroProductSection";
import link from "./link";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    product,
    blockContentLink,
    blockContent,
    category,
    mainCategory,
    brand,
    page,
    categorySection,
    heroProductSection,
    link,
    ItemsSection
  ])
});
