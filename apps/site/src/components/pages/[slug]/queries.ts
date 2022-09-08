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
        __typename
        ... on HeroProductSection {
          key: _key
          titleRaw
          descriptionRaw
          leftProduct {
            id: _id
            slug {
              current
            }
            name
            price
            image {
              asset {
                url
              }
            }
          }
          centerProduct {
            id: _id
            slug {
              current
            }
            name
            price
            image {
              asset {
                url
              }
            }
          }
          rightProduct {
            id: _id
            slug {
              current
            }
            name
            price
            image {
              asset {
                url
              }
            }
          }
        }
        __typename
        ... on ItemsSection {
          key: _key
          titleRaw
          leftProduct {
            id: _id
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
          centerProduct {
            id: _id
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
          rightProduct {
            id: _id
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
      }
    }
  }
`;
