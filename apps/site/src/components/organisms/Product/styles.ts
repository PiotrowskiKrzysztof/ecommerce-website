import { StyledBox, StyledGridBox } from "@components/styles/styles";
import { Typography } from "@components/styles/Typography";
import styled from "styled-components";

export const Container = styled(StyledGridBox)`
  padding: 10rem 0;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 50%;
`;

export const ProductTitle = styled(Typography)`
  margin-bottom: 2rem;
`;

export const ShopButton = styled.button`
  width: 12rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.Yellow};
  color: ${({ theme }) => theme.colors.White};
  border: 0.125rem solid ${({ theme }) => theme.colors.Yellow};
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.White};
    color: ${({ theme }) => theme.colors.DarkBlue};
    border: 0.125rem solid ${({ theme }) => theme.colors.DarkBlue};
  }
`;
