import gql from "graphql-tag";

// export const IMAGE_FRAGMENT = gql`
//   fragment ImageFragment on CustomImage {
//     _key
//     _type
//     asset {
//       url
//       metadata {
//         lqip
//         dimensions {
//           width
//           height
//         }
//       }
//       source {
//         _key
//       }
//     }
//     alt
//   }
// `;

// export const VIDEO_FRAGMENT = gql`
//   fragment VideoFragment on Video {
//     _key
//     _type
//     youtube {
//       link
//     }
//     vimeo {
//       link
//     }
//   }
// `;

// export const LINK_FRAGMENT = gql`
//   fragment LinkFragment on Link {
//     _key
//     type
//     resource {
//       ... on Page {
//         slug {
//           current
//         }
//       }
//     }
//     url
//     media {
//       asset {
//         url
//       }
//     }
//     section {
//       page {
//         slug {
//           current
//         }
//       }
//       sectionKey
//     }
//   }
// `;

// export const SEO_FRAGMENT = gql`
//   ${IMAGE_FRAGMENT}
//   fragment SeoFragment on Seo {
//     title
//     description
//     tags
//     noIndex
//     og {
//       title
//       description
//       image {
//         ...ImageFragment
//       }
//     }
//   }
// `;

// export const COLOR_FRAGMENT = gql`
//   fragment ColorDecorFragment on Color {
//     type
//     predefinedColor {
//       value
//     }
//     customColor
//   }
// `;
