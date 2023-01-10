import { SerializedStyles } from "@emotion/react";

export interface IHoverListenerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  customCSS?: SerializedStyles;
  onHover: (isHover: boolean) => void;
}
