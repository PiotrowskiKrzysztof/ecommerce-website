import gql from "graphql-tag";

export const ALL_PRODUCTS_QUERY = gql`
  query GetAllProducts {
    allProduct {
      key: _id
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

export const ALL_CATEGORIES_QUERY = gql`
  query GetAllCategories {
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
