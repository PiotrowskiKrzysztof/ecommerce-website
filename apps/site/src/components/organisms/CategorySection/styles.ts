import { StyledGridBox } from "@components/styles/styles";
import styled from "styled-components";
import { Typography } from "@components/styles/Typography";

export const Container = styled(StyledGridBox)`
  padding: 5rem;
  background-color: ${({ theme }) => theme.colors.LightGrey2};
`;

export const Category = styled(StyledGridBox)`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.White};
  //   border: 0.125rem solid ${({ theme }) => theme.colors.DarkBlue};
`;

export const Title = styled(Typography)`
  margin-bottom: 2rem;
`;

export const CategoryName = styled(Typography)`
  margin-bottom: 2rem;
`;

export const SubCategories = styled.div`
  margin-bottom: 2rem;
`;
