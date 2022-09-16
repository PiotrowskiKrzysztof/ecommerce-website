import BlockContent from "@components/misc/BlockContent";
import { GetPageQuery_allPage_sections_HeroProductSection as HeroProducSectionProps } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import { Inner } from "@components/styles/Inners";
import { StyledBox, StyledGridBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import Image from "next/image";
import NextLink from "next/link";
import Link from "@components/atoms/Link";

import * as Styled from "./styles";

const HeroProductSection: React.FC<HeroProducSectionProps> = ({
  titleRaw,
  descriptionRaw,
  leftProduct,
  centerProduct,
  rightProduct
}) => {
  return (
    <Inner variant="wide">
      <Styled.MainProductContainer>
        <Styled.MainInner variant="default">
          <StyledBox
            width="70%"
            height="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
            <BlockContent content={titleRaw} />
            <BlockContent content={descriptionRaw} />
            <NextLink href="/shop" passHref>
              <Styled.LinkContent>Shop now</Styled.LinkContent>
            </NextLink>
          </StyledBox>
        </Styled.MainInner>
      </Styled.MainProductContainer>
      <Styled.SubProductsContainer>
        <Inner variant="default">
          <StyledGridBox
            gridTemplateColumns="repeat(3, 1fr)"
            gridColumnGap="1rem"
          >
            <Link href={`/shop/product/${leftProduct?.id}`}>
              <Styled.SubProduct justifyContent="space-between">
                <StyledBox
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Typography variant="h6">
                    {leftProduct?.name}
                  </Typography>
                  <Typography fontSize="fontSize14">
                    {leftProduct?.price}$
                  </Typography>
                  <Styled.SubLinkContent>
                    Shop now
                  </Styled.SubLinkContent>
                </StyledBox>
                {leftProduct?.image?.asset?.url && (
                  <div>
                    <Image
                      src={leftProduct?.image?.asset?.url}
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                )}
              </Styled.SubProduct>
            </Link>
            <Link href={`/shop/product/${centerProduct?.id}`}>
              <Styled.SubProduct justifyContent="space-between">
                <StyledBox
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Typography variant="h6">
                    {centerProduct?.name}
                  </Typography>
                  <Typography fontSize="fontSize14">
                    {centerProduct?.price}$
                  </Typography>
                  <Styled.SubLinkContent>
                    Shop now
                  </Styled.SubLinkContent>
                </StyledBox>
                {centerProduct?.image?.asset?.url && (
                  <div>
                    <Image
                      src={centerProduct?.image?.asset?.url}
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                )}
              </Styled.SubProduct>
            </Link>
            <Link href={`/shop/product/${rightProduct?.id}`}>
              <Styled.SubProduct justifyContent="space-between">
                <StyledBox
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Typography variant="h6">
                    {rightProduct?.name}
                  </Typography>
                  <Typography fontSize="fontSize14">
                    {rightProduct?.price}$
                  </Typography>
                  <Styled.SubLinkContent>
                    Shop now
                  </Styled.SubLinkContent>
                </StyledBox>
                {rightProduct?.image?.asset?.url && (
                  <div>
                    <Image
                      src={rightProduct?.image?.asset?.url}
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                )}
              </Styled.SubProduct>
            </Link>
          </StyledGridBox>
        </Inner>
      </Styled.SubProductsContainer>
    </Inner>
  );
};

export default HeroProductSection;
