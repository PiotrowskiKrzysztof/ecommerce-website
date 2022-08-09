import React from "react";

import * as Styled from "./styles";
import { ColorsProps } from "./types";

const Colors: React.FC<ColorsProps> = ({ colors }) => (
  <Styled.ColorWrapper>
    <a>Colors</a>
    <Styled.ColorList>
      {colors.map(({ name, hex }) => (
        <li key={hex}>
          <Styled.ColorRec bg={hex} />
          <br />
          <a>{name}</a>
          <br />
          <a>{hex}</a>
        </li>
      ))}
    </Styled.ColorList>
  </Styled.ColorWrapper>
);

export default Colors;
