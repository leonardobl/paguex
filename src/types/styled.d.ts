import "styled-components";
import { Theme } from "../global/theme";

export type ITheme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
