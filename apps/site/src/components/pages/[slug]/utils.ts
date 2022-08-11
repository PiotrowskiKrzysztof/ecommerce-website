import { APOLLO_CLIENT } from "@setup/apollo";
import { GetStaticPaths, GetStaticProps } from "next";

import { GetPagesQuery } from "./operationTypes/GetPagesQuery";
import { PAGES_QUERY, SINGLE_PAGE_QUERY } from "./queries";
import { PageParams, Props } from "./types";

export const getStaticPaths: GetStaticPaths<
  PageParams
> = async () => {
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query<GetPagesQuery>({
    query: PAGES_QUERY
  });

  return {
    paths: data.allPage.map(({ slug }) => ({
      params: {
        slug: (slug?.current || "").split("/")
      }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<
  Props,
  PageParams
> = async (context) => {
  const slug = (context.params?.slug || []).join("/") || "/";
  const apolloClient = await APOLLO_CLIENT;
  const { data } = await apolloClient.query({
    query: SINGLE_PAGE_QUERY,
    variables: {
      slug
    }
  });

  const {
    allPage: [page]
  } = data;

  // 404
  if (!page) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      title: page.title || "",
      sections: page.sections
    }
  };
};
