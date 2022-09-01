import { APOLLO_CLIENT } from "@setup/apollo";
import client from "@setup/sanity";
import { GetStaticPaths, GetStaticProps } from "next";
import { GetPageCategoryQuery } from "./operationTypes/GetPageCategoryQuery";
import {
  PAGE_CATEGORY_QUERY,
  SINGLE_PAGE_CATEGORY_QUERY
} from "./queries";
import { CategoryPageProps, PageCategoryParams } from "./types";

export const getStaticPaths: GetStaticPaths<
  PageCategoryParams
> = async () => {
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query<GetPageCategoryQuery>({
    query: PAGE_CATEGORY_QUERY
  });

  return {
    paths: data.allMainCategory.map((category) => ({
      params: {
        category: category?.name || ""
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<
  CategoryPageProps,
  PageCategoryParams
> = async (context) => {
  const category = context.params?.category || "";
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query({
    query: SINGLE_PAGE_CATEGORY_QUERY,
    variables: {
      category
    }
  });

  const {
    allMainCategory: [mainCategory]
  } = data;

  const { data: categories } = await apolloClient.query({
    query: PAGE_CATEGORY_QUERY
  });

  let references = mainCategory?.subCategories.map(({ id }) => id);
  const products = await client.fetch(
    `*[_type == "product" && references(${JSON.stringify(
      references
    )})]{
        _id,
        name,
        price,
        rating,
        slug,
        image{
          asset->{url}
        }
    }`
  );

  // 404
  if (!mainCategory) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      name: mainCategory?.name,
      allCategoryProducts: products,
      allMainCategory: categories?.allMainCategory
    }
  };
};
