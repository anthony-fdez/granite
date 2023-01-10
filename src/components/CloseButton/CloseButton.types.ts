import { SerializedStyles } from "@emotion/react";

export interface ICloseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  customCSS?: SerializedStyles;
  size?: number;
}
