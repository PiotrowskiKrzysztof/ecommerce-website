import { NextPage } from "next";
import { SubCategoryPageProps } from "./types";
import { Inner } from "@components/styles/Inners";
import CategoriesList from "@components/organisms/CategoriesList";
import ProductList from "@components/organisms/ProductList";

import * as Styled from "./styles";

const CategoryPage: NextPage<SubCategoryPageProps> = ({
  allProduct,
  allMainCategory
}) => {
  return (
    <Inner variant="wide">
      <Styled.Container gridTemplateColumns="1fr 3fr">
        <CategoriesList {...{ allMainCategory }} />
        <ProductList allProduct={allProduct} />
      </Styled.Container>
    </Inner>
  );
};

export default CategoryPage;

/// #if !CLIENT_BUNDLE

export { getStaticPaths, getStaticProps } from "./utils";

/// #endif
