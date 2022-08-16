import styled from "styled-components";
import { Inner } from "@components/styles/Inners";

export const MainProductContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  height: 90vh;
  padding-top: 10rem;
`;

export const SubProductsContainer = styled.div`
  height: 10vh;
`;

export const MainInner = styled(Inner)`
  height: 70%;
`;

export const LinkContent = styled.a`
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
