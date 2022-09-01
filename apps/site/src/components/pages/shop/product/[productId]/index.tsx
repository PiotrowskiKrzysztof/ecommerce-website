import { NextPage } from "next";
import { ProductPageProps } from "./types";

import Product from "@components/organisms/Product";

const CategoryPage: NextPage<ProductPageProps> = ({ product }) => {
  console.log(product);
  return <Product {...{ product }} />;
};

export default CategoryPage;

/// #if !CLIENT_BUNDLE

export { getStaticPaths, getStaticProps } from "./utils";

/// #endif
