import { StyledBox } from "@components/styles/styles";
import styled from "styled-components";
import BlockContent from "@components/misc/BlockContent";

export const ProductContainer = styled(StyledBox)`
  background-color: ${({ theme }) => theme.colors.White};
  row-gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: translateY(-1rem);
  }
`;

export const Title = styled(BlockContent)`
  margin-bottom: 2rem;
`;
