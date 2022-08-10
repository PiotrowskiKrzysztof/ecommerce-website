import { Typography } from "@components/styles/Typography";
import styled from "styled-components";

export const Link = styled.a`
  font: inherit;
  color: ${({ theme }) => theme.colors.Blue};
`;

export const Quote = styled(Typography)`
  position: relative;
  padding-left: 11.75rem;
  margin-top: 1.4rem;
  margin-bottom: 2.8rem;
  &:before {
    content: "";
    width: 10.5rem;
    height: 0.188rem;
    background-color: ${({ theme }) => theme.colors.DarkGrey};
    position: absolute;
    left: 0;
    top: 0.625rem;
  }
`;
