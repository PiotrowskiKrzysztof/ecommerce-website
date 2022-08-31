import gql from "graphql-tag";

export const PAGE_SUBCATEGORY_QUERY = gql`
  query GetPageSubCategoryQuery {
    allCategory {
      key: _id
      name
      parent {
        key: _id
        name
      }
    }
  }
`;

export const ALL_CATEGORIES_QUERY = gql`
  query GetAllCategoriesQuery {
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

export const SUBCATEGORY_PRODUCTS_QUERY = gql`
  query GetSubCategoryProductsQuery($subcategory: ID!) {
    allProduct(where: { _: { references: $subcategory } }) {
      id: _id
      name
      productCategories {
        id: _id
        name
      }
      image {
        asset {
          url
        }
      }
      rating
      price
    }
  }
`;
