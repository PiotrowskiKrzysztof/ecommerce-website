import styled from "styled-components";
import { color, ColorProps } from "styled-system";

export const ColorRec = styled.div<ColorProps>`
  text-allign: center;
  display: inline-block;
  height: 108px;
  width: 108px;
  border-radius: 5px;
  ${color}
`;

export const ColorList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

export const ColorWrapper = styled.div`
  text-align: center;
  font-family: "Product Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
`;
