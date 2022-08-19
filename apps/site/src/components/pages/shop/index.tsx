import CategoriesList from "@components/organisms/CategoriesList";
import ProductList from "@components/organisms/ProductList";
import { Inner } from "@components/styles/Inners";
import { NextPage } from "next";

import * as Styled from "./styles";
import { ShopPageProps } from "./types";

const ShopPage: NextPage<ShopPageProps> = ({
  allProduct,
  allMainCategory
}) => {
  return (
    <Inner variant="wide">
      <Styled.Container gridTemplateColumns="1fr 3fr">
        <CategoriesList {...{ allMainCategory }} />
        <ProductList {...{ allProduct }} />
      </Styled.Container>
    </Inner>
  );
};

export default ShopPage;

/// #if !CLIENT_BUNDLE

export { getStaticProps } from "./utils";

/// #endif
