import gql from "graphql-tag";

export const PAGES_QUERY = gql`
  query GetPagesQuery {
    allPage {
      slug {
        current
      }
    }
  }
`;

export const SINGLE_PAGE_QUERY = gql`
  query GetPageQuery($slug: String!) {
    allPage(where: { slug: { current: { eq: $slug } } }) {
      title
      slug {
        current
      }
      sections {
        __typename
        ... on CategorySection {
          key: _key
          title
          categoriesList {
            key: _id
            name
            image {
              asset {
                url
              }
            }
            subCategories {
              key: _id
              name
              image {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;
