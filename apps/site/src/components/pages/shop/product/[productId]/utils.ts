import { APOLLO_CLIENT } from "@setup/apollo";
import { GetStaticPaths, GetStaticProps } from "next";

import { GetPageSingleProductQuery } from "./operationTypes/GetPageSingleProductQuery";
import {
  PAGE_SINGLE_PRODUCT_QUERY,
  SINGLE_PRODUCT_QUERY
} from "./queries";
import { PageProductParams, ProductPageProps } from "./types";

export const getStaticPaths: GetStaticPaths<
  PageProductParams
> = async () => {
  const apolloClient = await APOLLO_CLIENT;
  const { data } =
    await apolloClient.query<GetPageSingleProductQuery>({
      query: PAGE_SINGLE_PRODUCT_QUERY
    });

  return {
    paths: data.allProduct.map((product) => ({
      params: {
        productId: product?.id || ""
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<
  ProductPageProps,
  PageProductParams
> = async (context) => {
  const productId = context.params?.productId || "";
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query({
    query: SINGLE_PRODUCT_QUERY,
    variables: {
      productId
    }
  });

  // 404
  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      product: data?.Product
    }
  };
};
