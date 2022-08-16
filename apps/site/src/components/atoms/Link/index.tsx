import NextLink from "next/link";

import * as Styled from "./styles";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({ href, children, className }) => (
  <NextLink href={href} passHref>
    <Styled.LinkContent {...{ className }}>
      {children}
    </Styled.LinkContent>
  </NextLink>
);

export default Link;
