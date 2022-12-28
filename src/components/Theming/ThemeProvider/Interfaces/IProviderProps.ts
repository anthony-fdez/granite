import { ITheme } from "../../../../utils/types/theme";
import { IStyles } from "./IStyles";

export interface IProviderProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  defaultStyles?: IStyles;
  theme?: ITheme;
}
