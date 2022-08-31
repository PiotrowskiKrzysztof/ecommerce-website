import { APOLLO_CLIENT } from "@setup/apollo";
import { GetStaticPaths, GetStaticProps } from "next";
import { GetPageSubCategoryQuery } from "./operationTypes/GetPageSubCategoryQuery";

import {
  ALL_CATEGORIES_QUERY,
  PAGE_SUBCATEGORY_QUERY,
  SUBCATEGORY_PRODUCTS_QUERY
} from "./queries";
import { PageSubCategoryParams, SubCategoryPageProps } from "./types";

export const getStaticPaths: GetStaticPaths<
  PageSubCategoryParams
> = async () => {
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query<GetPageSubCategoryQuery>({
    query: PAGE_SUBCATEGORY_QUERY
  });

  return {
    paths: data.allCategory.map((subcategory) => ({
      params: {
        category: subcategory?.parent?.name || "",
        subcategory: subcategory?.key || ""
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<
  SubCategoryPageProps,
  PageSubCategoryParams
> = async (context) => {
  const category = context.params?.category || "";
  const subcategory = context.params?.subcategory || "";
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query({
    query: SUBCATEGORY_PRODUCTS_QUERY,
    variables: {
      subcategory
    }
  });

  const { data: categories } = await apolloClient.query({
    query: ALL_CATEGORIES_QUERY
  });

  // 404
  if (!data?.allProduct) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      allProduct: data?.allProduct,
      allMainCategory: categories?.allMainCategory
    }
  };
};
