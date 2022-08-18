import ProductList from "@components/organisms/ProductList";
import { Inner } from "@components/styles/Inners";
import { NextPage } from "next";
import { GetAllProducts } from "./operationTypes/GetAllProducts";

import * as Styled from "./styles";

const ShopPage: NextPage<GetAllProducts> = ({ allProduct }) => {
  return (
    <Inner variant="default">
      <Styled.Container gridTemplateColumns="1fr 3fr">
        <div>
          <p>categories</p>
        </div>
        <ProductList allProduct={allProduct} />
      </Styled.Container>
    </Inner>
  );
};

export default ShopPage;

/// #if !CLIENT_BUNDLE

export { getStaticProps } from "./utils";

/// #endif
