import styled from "styled-components";
import { Inner } from "@components/styles/Inners";
import { StyledBox } from "@components/styles/styles";

export const MainProductContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  height: 90vh;
  padding-top: 10rem;
  margin-bottom: 10vh;
`;

export const SubProductsContainer = styled.div`
  height: 15vh;
  position: absolute;
  bottom: 5vh;
  left: 0;
  right: 0;
`;

export const SubLinkContent = styled.a`
  color: ${({ theme }) => theme.colors.Yellow};
  transition: 0.5s;
`;

export const SubProduct = styled(StyledBox)`
  padding: 2rem;
  border: 0.5rem solid ${({ theme }) => theme.colors.LightGrey};
  background-color: ${({ theme }) => theme.colors.White};
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: translateY(-1rem);
    ${SubLinkContent} {
      color: ${({ theme }) => theme.colors.DarkBlue};
    }
  }
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
