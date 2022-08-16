import { StyledGridBox } from "@components/styles/styles";
import styled, { css } from "styled-components";
import { Typography } from "@components/styles/Typography";

import { StyledSubCategoriesProps } from "./types";

export const Container = styled(StyledGridBox)`
  padding: 5rem;
`;

export const Category = styled(StyledGridBox)`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.White};
`;

export const Title = styled(Typography)`
  margin-bottom: 2rem;
`;

export const CategoryName = styled(Typography)`
  margin-bottom: 2rem;
`;

export const SubCategories = styled.div<StyledSubCategoriesProps>`
  margin-bottom: 2rem;
  ${({ isFirst }) =>
    isFirst &&
    css`
      grid-column: 1 / span 2;
    `}
`;

export const SubCategoryName = styled(Typography)`
  margin-top: 0.5rem;
`;
