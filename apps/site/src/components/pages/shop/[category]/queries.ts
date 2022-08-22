import gql from "graphql-tag";

export const PAGE_CATEGORY_QUERY = gql`
  query GetPageCategoryQuery {
    allMainCategory {
      key: _id
      name
      subCategories {
        key: _id
        name
      }
    }
  }
`;

export const SINGLE_PAGE_CATEGORY_QUERY = gql`
  query GetSinglePageCategoryQuery($category: String!) {
    allMainCategory(where: { name: { eq: $category } }) {
      id: _id
      name
      subCategories {
        id: _id
        name
      }
    }
  }
`;

export const CATEGORY_PRODUCTS_QUERY = gql`
  query GetCategoryProductsQuery($reference: ID!) {
    allProduct(where: { _: { references: $reference } }) {
      id: _id
      name
      productCategories {
        id: _id
        name
      }
    }
  }
`;
