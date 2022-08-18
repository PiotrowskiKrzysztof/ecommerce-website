import Link from "@components/atoms/Link";
import StarRating from "@components/atoms/StarRating";
import { GetPageQuery_allPage_sections_ItemsSection as ItemsSectionProps } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import { Inner } from "@components/styles/Inners";
import { StyledBox, StyledGridBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import Image from "next/image";

import * as Styled from "./styles";

export const ItemsSection: React.FC<ItemsSectionProps> = ({
  titleRaw,
  leftProduct,
  centerProduct,
  rightProduct
}) => {
  return (
    <Inner variant="default">
      <Styled.Title content={titleRaw} />
      <StyledGridBox
        gridTemplateColumns="repeat(3, 1fr)"
        gridColumnGap="1rem"
        pt="2rem"
        pb="5rem"
      >
        <Link href="/">
          <Styled.ProductContainer flexDirection="column">
            {leftProduct?.image?.asset?.url && (
              <div>
                <Image
                  src={leftProduct?.image?.asset?.url}
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </div>
            )}
            <StyledBox justifyContent="space-between">
              <Typography fontSize="fontSize16">
                {leftProduct?.price}$
              </Typography>
              <StarRating rating={leftProduct?.rating} />
            </StyledBox>
            <Typography variant="h6">{leftProduct?.name}</Typography>
          </Styled.ProductContainer>
        </Link>
        <Link href="/">
          <Styled.ProductContainer flexDirection="column">
            {centerProduct?.image?.asset?.url && (
              <div>
                <Image
                  src={centerProduct?.image?.asset?.url}
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </div>
            )}
            <StyledBox justifyContent="space-between">
              <Typography fontSize="fontSize16">
                {centerProduct?.price}$
              </Typography>
              <StarRating rating={centerProduct?.rating} />
            </StyledBox>
            <Typography variant="h6">
              {centerProduct?.name}
            </Typography>
          </Styled.ProductContainer>
        </Link>
        <Link href="/">
          <Styled.ProductContainer flexDirection="column">
            {rightProduct?.image?.asset?.url && (
              <div>
                <Image
                  src={rightProduct?.image?.asset?.url}
                  width={200}
                  height={200}
                  layout="responsive"
                />
              </div>
            )}
            <StyledBox justifyContent="space-between">
              <Typography fontSize="fontSize16">
                {rightProduct?.price}$
              </Typography>
              <StarRating rating={rightProduct?.rating} />
            </StyledBox>
            <Typography variant="h6">{rightProduct?.name}</Typography>
          </Styled.ProductContainer>
        </Link>
      </StyledGridBox>
    </Inner>
  );
};

export default ItemsSection;
