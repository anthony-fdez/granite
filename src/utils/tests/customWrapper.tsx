/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import { ThemeProvider } from "../../components";

const Provider = ({ children }: { children: JSX.Element | JSX.Element[] }): JSX.Element => {
  return <ThemeProvider theme="light">{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
  return render(ui, { wrapper: Provider, ...options });
};

export default customRender;
