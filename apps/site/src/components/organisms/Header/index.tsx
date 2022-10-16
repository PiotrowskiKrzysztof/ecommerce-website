import { Inner } from "@components/styles/Inners";
import { StyledBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import NextLink from "next/link";
import Link from "@components/atoms/Link";
import { useRouter } from "next/router";
import React from "react";
import { useAppContext } from "@components/misc/AppWraper";
import { useSession, signIn, signOut } from "next-auth/react";

import * as Styled from "./styles";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ items }) => {
  const { asPath } = useRouter();
  const cartContext = useAppContext();
  const { data: session } = useSession();

  return (
    <Styled.Wrapper>
      <Inner variant="wide">
        <StyledBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <Typography variant="smallText" fontWeight="bold">
              <NextLink href="/" passHref>
                XYZon
              </NextLink>
            </Typography>
          </div>
          <StyledBox alignItems="center">
            <ul>
              {items.map(({ label, href }) => {
                const isHighlighted = asPath.startsWith(href);

                return (
                  <Styled.ListItem key={label} {...{ isHighlighted }}>
                    <Typography variant="smallText">
                      <NextLink {...{ href }} passHref>
                        {label}
                      </NextLink>
                    </Typography>
                  </Styled.ListItem>
                );
              })}
            </ul>
            {session ? (
              <>
                <Styled.Sign
                  onClick={() => signOut()}
                  variant="smallText"
                >
                  Sign out
                </Styled.Sign>
                <Styled.UserIcon />
              </>
            ) : (
              <Styled.Sign
                variant="smallText"
                onClick={() => signIn()}
              >
                Sign in
              </Styled.Sign>
            )}
            <Link href="/shop/cart">
              <Styled.ShoppingCartIconContainer>
                <Styled.ShoppingCartIcon />
                {cartContext.productCounter > 0 ? (
                  <Styled.ProductCounter>
                    {cartContext.productCounter}
                  </Styled.ProductCounter>
                ) : null}
              </Styled.ShoppingCartIconContainer>
            </Link>
          </StyledBox>
        </StyledBox>
      </Inner>
    </Styled.Wrapper>
  );
};

export default Header;
