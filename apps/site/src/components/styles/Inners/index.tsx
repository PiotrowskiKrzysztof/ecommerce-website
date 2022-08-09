import styled from "styled-components";
import { variant, layout } from "styled-system";
import { innerStyles } from "@setup/theme/partials/inners";

type TextVariants = keyof typeof innerStyles;

interface InnersProps {
  variant?: TextVariants;
}

export const Inner = styled.div<InnersProps>`
  padding: 0 1em;
  ${layout};
  ${variant({ prop: "variant", variants: innerStyles })}
`;
