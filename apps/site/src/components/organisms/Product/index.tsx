import { Inner } from "@components/styles/Inners";
import BlockContent from "@components/misc/BlockContent";
import StarRating from "@components/atoms/StarRating";
import { StyledBox } from "@components/styles/styles";
import Image from "next/image";
import { useCallback } from "react";
import { useAppContext } from "@components/misc/AppWraper";

import { ProductProps } from "./types";
import * as Styled from "./styles";

const Product: React.FC<ProductProps> = ({ product }) => {
  const cartContext = useAppContext();
  const handleProduct = useCallback(() => {
    localStorage.setItem(
      product.id,
      JSON.stringify({
        id: product?.id,
        name: product?.name,
        image: product?.image?.asset?.url,
        price: product?.price,
        qauntity: 1
      })
    );
  }, []);
  return (
    <Inner variant="wide">
      <Styled.Container gridTemplateColumns="repeat(2, 1fr)">
        <StyledBox width="50%" flexDirection="column">
          <Styled.ProductTitle variant="h5">
            {product?.name}
          </Styled.ProductTitle>
          <BlockContent content={product?.descriptionRaw} />
          <StyledBox my="1rem">
            <StarRating rating={product?.rating} />
            {`(${product?.rating})`}
          </StyledBox>
          <Styled.ShopButton
            type="button"
            onClick={() => {
              handleProduct();
              cartContext.counterFunction();
            }}
          >
            Add to cart
          </Styled.ShopButton>
        </StyledBox>
        <Styled.ImageContainer>
          {product?.image?.asset?.url && (
            <Image
              src={product?.image?.asset?.url}
              layout="fill"
              objectFit="contain"
            />
          )}
        </Styled.ImageContainer>
      </Styled.Container>
    </Inner>
  );
};

export default Product;
