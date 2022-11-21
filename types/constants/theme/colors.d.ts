export declare type AvailableColorsType = "red" | "blue";
declare type ColorOptions = {
    backgroundColor: string;
    fontColor: string;
};
declare type Variants = {
    filled: ColorOptions;
    subtle: ColorOptions;
    outlined: ColorOptions;
    light: ColorOptions;
};
declare type ColorType = {
    light: Variants;
    dark: Variants;
};
export interface IColorShades {
    red: ColorType;
    blue: ColorType;
}
export declare const colors: IColorShades;
export {};
