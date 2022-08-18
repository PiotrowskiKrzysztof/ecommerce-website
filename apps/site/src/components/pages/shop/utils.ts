import { APOLLO_CLIENT } from "@setup/apollo";
import { GetStaticProps } from "next";

import { ALL_PRODUCTS_QUERY } from "./queries";

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query({
    query: ALL_PRODUCTS_QUERY
  });

  return {
    props: {
      allProduct: data?.allProduct
    }
  };
};
