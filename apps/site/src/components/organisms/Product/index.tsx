import { Inner } from "@components/styles/Inners";
import BlockContent from "@components/misc/BlockContent";
import StarRating from "@components/atoms/StarRating";
import { StyledBox } from "@components/styles/styles";

import { ProductProps } from "./types";
import * as Styled from "./styles";
import Image from "next/image";

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Inner variant="default">
      <Styled.Container gridTemplateColumns="repeat(2, 1fr)">
        <StyledBox width="50%" flexDirection="column">
          <h1>{product?.name}</h1>
          <BlockContent content={product?.descriptionRaw} />
          <StarRating rating={product?.rating} />
        </StyledBox>
        <Styled.ImageContainer>
          {product?.image?.asset?.url && (
            <Image
              src={product?.image?.asset?.url}
              width={100}
              height={100}
            />
          )}
        </Styled.ImageContainer>
      </Styled.Container>
    </Inner>
  );
};

export default Product;
