import { NextPage } from "next";
import { GetAllProducts } from "./operationTypes/GetAllProducts";

const ShopPage: NextPage<GetAllProducts> = ({ allProduct }) => {
  return (
    <>
      <p>ShopPage</p>
      <div>
        <p>product list</p>
        {allProduct.map((product) => (
          <p>{product?.name}</p>
        ))}
      </div>
    </>
  );
};

export default ShopPage;

/// #if !CLIENT_BUNDLE

export { getStaticProps } from "./utils";

/// #endif
