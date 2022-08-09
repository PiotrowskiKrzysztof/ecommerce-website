import { Theme } from "@setup/theme";

declare module "styled-components"{
    export interface DefaultTheme extends Theme {}
}

export {};