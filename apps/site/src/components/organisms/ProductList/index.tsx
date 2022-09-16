import Link from "@components/atoms/Link";
import StarRating from "@components/atoms/StarRating";
import { GetAllProducts } from "@components/pages/shop/operationTypes/GetAllProducts";
import { StyledBox, StyledGridBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import Image from "next/image";

import * as Styled from "./styles";

const ProductList: React.FC<GetAllProducts> = ({ allProduct }) => {
  return (
    <StyledGridBox
      gridTemplateColumns="repeat(3, 1fr)"
      gridColumnGap="1rem"
    >
      {allProduct.map((product) => (
        <Link
          key={product?.key}
          href={`shop/product/${product?.key}`}
        >
          <Styled.Product flexDirection="column">
            {product?.image?.asset?.url && (
              <Image
                src={product?.image?.asset?.url}
                width={200}
                height={200}
                layout="responsive"
              />
            )}
            <Styled.ProductTitle>{product?.name}</Styled.ProductTitle>
            <StyledBox justifyContent="space-between" mt="1rem">
              <Typography fontSize="fontSize16">
                {product?.price}$
              </Typography>
              <StarRating rating={product?.rating} />
            </StyledBox>
          </Styled.Product>
        </Link>
      ))}
    </StyledGridBox>
  );
};

export default ProductList;
