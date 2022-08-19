import { Typography } from "@components/styles/Typography";
import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 0;
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.colors.White};
`;

export const CategoryTitle = styled(Typography)`
  margin-bottom: 1rem;
  cursor: pointer;
  position: relative;
  padding-left: 1rem;
  &:before {
    content: "";
    width: 0.125rem;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.White};
    position: absolute;
    left: 0;
    transition: 0.5s;
  }
  &:hover {
    &:before {
      background-color: ${({ theme }) => theme.colors.Yellow};
    }
  }
`;

export const Heading = styled(Typography)`
  padding-bottom: 1rem;
  margin: 1rem 1rem;
  border-bottom: 0.063rem solid
    ${({ theme }) => theme.colors.DarkBlue};
`;
