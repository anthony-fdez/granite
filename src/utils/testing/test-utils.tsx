/* eslint-disable import/no-extraneous-dependencies */

import { RenderOptions, render } from "@testing-library/react";

import React, { ReactElement } from "react";
import { ThemeProvider } from "../../components";

const AllTheProviders = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <ThemeProvider theme="light">{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  render(ui, { wrapper: AllTheProviders, ...options });
};

export default customRender;
