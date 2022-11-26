/// <reference types="react" />
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";
declare const _default: {
    title: string;
    component: ({ children, theme, primaryColor, }: import("./Interfaces/IProviderProps").IProviderProps) => JSX.Element;
};
export default _default;
export declare const Dark: ComponentStory<({ children, theme, primaryColor, }: import("./Interfaces/IProviderProps").IProviderProps) => JSX.Element>;
export declare const Light: ComponentStory<({ children, theme, primaryColor, }: import("./Interfaces/IProviderProps").IProviderProps) => JSX.Element>;
export declare const Default: ComponentStory<({ children, theme, primaryColor, }: import("./Interfaces/IProviderProps").IProviderProps) => JSX.Element>;
export declare const PrimaryRed: ComponentStory<({ children, theme, primaryColor, }: import("./Interfaces/IProviderProps").IProviderProps) => JSX.Element>;
