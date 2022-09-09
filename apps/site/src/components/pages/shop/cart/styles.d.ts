import { StyledBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import styled, { css } from "styled-components";

import { StyledCartItem } from "./types";

export const Container = styled.div`
  padding: 8rem 0;
`;

export const Title = styled(Typography)`
  margin-bottom: 2rem;
`;

export const ItemContainer = styled(StyledBox)`
  width: 100%;
  height: fit-content;
  border-bottom: 0.063rem solid
    ${({ theme }) => theme.colors.DarkBlue};
`;

export const ItemData = styled(StyledBox)<StyledCartItem>`
  padding: 1rem;
  ${({ isWide }) =>
    isWide ? `flex-basis: 40%;` : `flex-basis: 20%;`};
  align-items: center;
  ${({ isLast }) =>
    isLast
      ? `justify-content: flex-end;`
      : `justify-content: flex-start;`};
`;

export const CartSummary = styled.div`
  margin-left: 1rem;
  padding: 1rem;
`;

export const ShopButton = styled.button`
  margin-top: 2rem;
  width: 12rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.Yellow};
  color: ${({ theme }) => theme.colors.White};
  border: 0.063rem solid ${({ theme }) => theme.colors.Yellow};
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.DarkBlue};
    border: 0.063rem solid ${({ theme }) => theme.colors.DarkBlue};
  }
`;

export const ActionButton = styled.button`
  // width: 12rem;
  padding: 1rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.Yellow};
  color: ${({ theme }) => theme.colors.White};
  border: 0.063rem solid ${({ theme }) => theme.colors.Yellow};
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.DarkBlue};
    border: 0.063rem solid ${({ theme }) => theme.colors.DarkBlue};
  }
`;
