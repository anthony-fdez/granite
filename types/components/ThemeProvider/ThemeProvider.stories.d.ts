/// <reference types="react" />
import { ComponentStory } from "@storybook/react";
import "@storybook/addon-console";
declare const _default: {
    title: string;
    component: ({ children, theme, }: import("./Interfaces/IProviderProps").IProviderProps) => JSX.Element;
};
export default _default;
export declare const Dark: ComponentStory<({ children, theme, }: import("./Interfaces/IProviderProps").IProviderProps) => JSX.Element>;
export declare const Light: ComponentStory<({ children, theme, }: import("./Interfaces/IProviderProps").IProviderProps) => JSX.Element>;
