import styled from "styled-components";
import {
  TypographyProps as StyledTypographyProps,
  variant,
  typography
} from "styled-system";
import { textStyles } from "@setup/theme/partials/typography";

type TextVariants = keyof typeof textStyles;

interface TypographyProps extends StyledTypographyProps {
  variant?: TextVariants;
}

export const Typography = styled.p<TypographyProps>`
  ${typography};
  ${variant({ prop: "variant", variants: textStyles })}
`;
