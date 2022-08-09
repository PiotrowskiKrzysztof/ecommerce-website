import colors from "./partials/colors";
import {
  fontFamilies,
  fontSizes,
  textStyles,
  fontWeights
} from "./partials/typography";
import { innerStyles } from "./partials/inners";

const theme = {
  colors,
  fonts: fontFamilies,
  fontSizes,
  textStyles,
  fontWeights,
  innerStyles
};

export default theme;

export type Theme = typeof theme;
