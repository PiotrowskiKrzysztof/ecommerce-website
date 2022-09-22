import { Inner } from "@components/styles/Inners";
import { StyledBox, StyledGridBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import QuantitySelect from "@components/atoms/QauntitySelect";

import * as Styled from "./styles";
import { CartProductsProps } from "./types";

const Cart: React.FC = () => {
  const [products, setProducts] = useState<CartProductsProps>();
  useEffect(() => {
    const chosenProducts = [];
    const keys = Object.keys(localStorage);
    let index = keys.length;

    while (index--) {
      if (
        JSON.parse(localStorage.getItem(keys[index]) || "{}").id ===
        keys[index]
      ) {
        chosenProducts.push(
          JSON.parse(localStorage.getItem(keys[index]) || "{}")
        );
      }
    }
    setProducts(chosenProducts);
  }, []);

  const counterItems = 25;
  const finallPrice = 926;
  return (
    <Styled.Container>
      <Inner variant="default">
        <Styled.Title variant="h5">Shopping Cart</Styled.Title>
        <StyledBox>
          <StyledBox flexBasis="70%" flexDirection="column">
            <Styled.ItemContainer>
              <Styled.ItemData>
                <Typography fontWeight="bold">Image</Typography>
              </Styled.ItemData>
              <Styled.ItemData isWide={true}>
                <Typography fontWeight="bold">Name</Typography>
              </Styled.ItemData>
              <Styled.ItemData>
                <Typography fontWeight="bold">Qauntity</Typography>
              </Styled.ItemData>
              <Styled.ItemData>
                <Typography fontWeight="bold">Price</Typography>
              </Styled.ItemData>
              <Styled.ItemData isLast={true}>
                <Typography fontWeight="bold">Action</Typography>
              </Styled.ItemData>
            </Styled.ItemContainer>
            {products instanceof Array &&
              products?.map((product) => (
                <Styled.ItemContainer>
                  <Styled.ItemData>
                    <Image
                      src={product?.image}
                      width={100}
                      height={100}
                    />
                  </Styled.ItemData>
                  <Styled.ItemData isWide={true}>
                    <Typography fontWeight="bold">
                      {product?.name}
                    </Typography>
                  </Styled.ItemData>
                  <Styled.ItemData>
                    <QuantitySelect {...product} />
                  </Styled.ItemData>
                  <Styled.ItemData>
                    <Typography fontWeight="bold">{`$${product?.price}`}</Typography>
                  </Styled.ItemData>
                  <Styled.ItemData isLast={true}>
                    <Typography fontWeight="bold">
                      <Styled.ActionButton>X</Styled.ActionButton>
                    </Typography>
                  </Styled.ItemData>
                </Styled.ItemContainer>
              ))}
          </StyledBox>
          <StyledBox flexBasis="30%">
            <Styled.CartSummary>
              <Typography variant="h5">{`Subtotal (${counterItems} items):`}</Typography>
              <Typography variant="h6">{`$ ${finallPrice}`}</Typography>
              <Styled.ShopButton type="button">
                Checkout
              </Styled.ShopButton>
            </Styled.CartSummary>
          </StyledBox>
        </StyledBox>
      </Inner>
    </Styled.Container>
  );
};

export default Cart;
