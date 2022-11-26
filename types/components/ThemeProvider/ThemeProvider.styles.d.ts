import { IStyles } from "./Interfaces/IStyles";
import { SerializedStyles } from "@emotion/react";
interface Props {
    styles: IStyles;
}
export declare const getGlobalStyles: ({ styles }: Props) => SerializedStyles;
export {};
