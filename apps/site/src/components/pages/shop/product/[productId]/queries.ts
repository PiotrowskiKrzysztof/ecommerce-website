import gql from "graphql-tag";

export const PAGE_SINGLE_PRODUCT_QUERY = gql`
  query GetPageSingleProductQuery {
    allProduct {
      id: _id
    }
  }
`;

export const SINGLE_PRODUCT_QUERY = gql`
  query GetSingleProductQuery($productId: ID!) {
    Product(id: $productId) {
      name
      price
      image {
        asset {
          url
        }
      }
      descriptionRaw
      rating
    }
  }
`;
