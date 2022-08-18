import gql from "graphql-tag";

export const ALL_PRODUCTS_QUERY = gql`
  query GetAllProducts {
    allProduct {
      name
      price
      image {
        asset {
          url
        }
      }
      slug {
        current
      }
      rating
    }
  }
`;
