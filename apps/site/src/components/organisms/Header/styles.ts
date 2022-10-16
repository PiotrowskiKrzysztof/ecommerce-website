import { Typography } from "@components/styles/Typography";
import { ShoppingCart, User } from "public/assets/svg";
import styled from "styled-components";

import { StyledHeaderProps } from "./types";

export const Wrapper = styled.header`
  position: fixed;
  top: 0;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 2;
  padding: 2.625rem 0;
  background-color: ${({ theme }) => theme.colors.DarkBlue};
  color: ${({ theme }) => theme.colors.White};
`;

export const ListItem = styled.li<StyledHeaderProps>`
  display: table;
  float: left;
  padding: 0 10px;
  margin-left: 2rem;
  color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.colors.Yellow : "inherit"};
`;

export const ShoppingCartIcon = styled(ShoppingCart)`
  fill: ${({ theme }) => theme.colors.Yellow};
  width: 2em;
  height: 2em;
  margin-left: 2rem;
`;

export const ShoppingCartIconContainer = styled.div`
  position: relative;
`;

export const ProductCounter = styled.p`
  position: absolute;
  top: -0.313rem;
  right: -1.563rem;
  padding: 0.313rem 0.625rem;
  background-color: ${({ theme }) => theme.colors.DarkBlue};
  border: 0.063rem solid ${({ theme }) => theme.colors.Yellow};
  border-radius: 50%;
`;

export const Sign = styled(Typography)`
  margin-left: 2rem;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colors.Yellow};
  }
`;

export const UserIcon = styled(User)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  stroke: ${({ theme }) => theme.colors.Yellow};
`;

export const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  top: 2.5rem;
  right: 0;
  padding: 0.5rem;
  min-width: 10rem;
  background-color: white;
  border: 0.063rem solid ${({ theme }) => theme.colors.DarkBlue};
`;

export const DropdownMenuItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0.5rem;
  color: ${({ theme }) => theme.colors.DarkBlue};
  transition: 0.5s;
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 0.063rem solid
      ${({ theme }) => theme.colors.DarkBlue};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.LightGrey2};
    color: ${({ theme }) => theme.colors.Yellow};
  }
`;

export const DropdownMenuContainer = styled.div`
  margin-left: 2rem;
  position: relative;
`;
