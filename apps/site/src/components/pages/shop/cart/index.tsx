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
  const [finallPrice, setFinallPrice] = useState(0);
  const [finallCoutItems, setfinallCoutItems] = useState(0);
  const [forceUpdate, setForceUpdate] = useState(false);
  useEffect(() => {
    const chosenProducts = [];
    let counterPrice = 0;
    let counterItems = 0;
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
        counterPrice +=
          JSON.parse(localStorage.getItem(keys[index]) || "{}")
            ?.price *
          JSON.parse(localStorage.getItem(keys[index]) || "{}")
            ?.quantity;
        counterItems += JSON.parse(
          localStorage.getItem(keys[index]) || "{}"
        )?.quantity;
      }
    }
    setFinallPrice(counterPrice);
    setfinallCoutItems(counterItems);
    setProducts(chosenProducts);
  }, [forceUpdate]);

  const counterItems = 25;
  // const finallPrice = 926;
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
              products.map((product) => (
                <Styled.ItemContainer key={product?.id}>
                  <Styled.ItemData>
                    {product?.image && (
                      <Image
                        src={product?.image}
                        width={100}
                        height={100}
                      />
                    )}
                  </Styled.ItemData>
                  <Styled.ItemData isWide={true}>
                    <Typography fontWeight="bold">
                      {product?.name}
                    </Typography>
                  </Styled.ItemData>
                  <Styled.ItemData>
                    <QuantitySelect
                      {...product}
                      setProducts={setProducts}
                      setForceUpdate={setForceUpdate}
                    />
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
              <Typography variant="h5">{`Subtotal (${finallCoutItems} items):`}</Typography>
              {products instanceof Array &&
                products.map((product) => (
                  <StyledBox justifyContent="space-between">
                    <Typography variant="paragraph">{`${product?.name}`}</Typography>
                    <Typography variant="paragraph">{`x${
                      product?.quantity
                    } (${(product?.quantity * product?.price).toFixed(
                      2
                    )}$)`}</Typography>
                  </StyledBox>
                ))}
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
