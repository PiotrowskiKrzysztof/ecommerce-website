import BlockContent from "@components/misc/BlockContent";
import { GetPageQuery_allPage_sections_HeroProductSection as HeroProducSectionProps } from "@components/pages/[slug]/operationTypes/GetPageQuery";
import { Inner } from "@components/styles/Inners";
import { StyledBox, StyledGridBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import Image from "next/image";
import Link from "next/link";

import * as Styled from "./styles";

const HeroProductSection: React.FC<HeroProducSectionProps> = ({
  titleRaw,
  descriptionRaw,
  leftProduct,
  centerProduct,
  rightProduct
}) => {
  console.log("HeroProductSection");
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
            {/* <Styled.Button type="button"></Styled.Button> */}
            <Link href="/shop" passHref>
              <Styled.LinkContent>Shop now</Styled.LinkContent>
            </Link>
          </StyledBox>
        </Styled.MainInner>
      </Styled.MainProductContainer>
      <Styled.SubProductsContainer>
        <Inner variant="default">
          {leftProduct?.name}
          {centerProduct?.name}
          {rightProduct?.name}
        </Inner>
      </Styled.SubProductsContainer>
    </Inner>
  );
};

export default HeroProductSection;
