import styled from "styled-components";
import {
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps
} from "styled-system";

export const StyledBox = styled.div<
  SpaceProps & LayoutProps & FlexboxProps
>`
  display: flex;
  ${compose(space, layout, flexbox)}
`;

export const StyledGridBox = styled.div<
  SpaceProps & LayoutProps & GridProps & FlexboxProps
>`
  display: grid;
  ${compose(space, layout, grid, flexbox)}
`;
