export declare type AvailableColorsType = "red" | "blue";
declare type ColorOptions = {
    background: string;
    backgroundHover: string;
    font: string;
};
declare type Variants = {
    color: string;
    filled: ColorOptions;
    subtle: ColorOptions;
    outlined: ColorOptions;
};
declare type Common = {
    background: string;
    backgroundAccent: string;
    font: string;
};
export interface IColorShades {
    common: {
        light: Common;
        dark: Common;
    };
    red: Variants;
    blue: Variants;
}
export declare const colors: IColorShades;
export {};
