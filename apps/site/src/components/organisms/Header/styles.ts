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
