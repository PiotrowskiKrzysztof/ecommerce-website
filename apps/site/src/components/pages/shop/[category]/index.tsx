import { NextPage } from "next";
import { Inner } from "@components/styles/Inners";
import CategoriesList from "@components/organisms/CategoriesList";
import ProductList from "@components/organisms/ProductList";

import * as Styled from "./styles";
import { CategoryPageProps } from "./types";

const CategoryPage: NextPage<CategoryPageProps> = ({
  name,
  allCategoryProducts,
  allMainCategory
}) => {
  return (
    <Inner variant="wide">
      <Styled.Container gridTemplateColumns="1fr 3fr">
        <CategoriesList {...{ allMainCategory }} />
        <ProductList allProduct={allCategoryProducts} />
      </Styled.Container>
    </Inner>
  );
};

export default CategoryPage;

/// #if !CLIENT_BUNDLE

export { getStaticPaths, getStaticProps } from "./utils";

/// #endif
