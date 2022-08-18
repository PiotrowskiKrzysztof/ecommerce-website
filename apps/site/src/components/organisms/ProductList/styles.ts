import { StyledBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import styled from "styled-components";

export const Product = styled(StyledBox)`
  background-color: ${({ theme }) => theme.colors.White};
  padding: 2rem;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transform: translateY(-1rem);
  }
`;

export const ProductTitle = styled(Typography)`
  margin-top: 1rem;
`;
