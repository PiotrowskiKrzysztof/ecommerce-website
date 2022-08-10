import { Typography } from "@components/styles/Typography";
import { BlockContentProps } from "@sanity/block-content-to-react";
import NextLink from "next/link";

import { Link, Quote } from "./styles";

export const SERIALIZERS: BlockContentProps["serializers"] = {
  types: {
    block: ({ node, children }) => {
      const sanityVariant = node?.style;
      const variant =
        !sanityVariant || sanityVariant === "normal"
          ? "paragraph"
          : sanityVariant;
      const isQuote = variant === "blockquote";

      return isQuote ? (
        <Quote {...{ variant }}>{children}</Quote>
      ) : (
        <Typography {...{ variant }}>{children}</Typography>
      );
    }
  },
  marks: {
    blockContentLink: ({ mark, children }) => (
      <NextLink href={mark.href} passHref>
        <Link>{children}</Link>
      </NextLink>
    ),
    decors: ({ mark, children }) => (
      <span style={{ color: mark.color }}>{children}</span>
    )
  }
};
