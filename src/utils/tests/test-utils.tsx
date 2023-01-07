/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement } from "react";
import { render as rtlRender } from "@testing-library/react";
import ThemeProvider from "../../components/ThemeProvider/ThemeProvider";

const render = (ui: ReactElement, { ...options } = {}) => {
  return rtlRender(ui, {
    wrapper: ({ children }) => <ThemeProvider theme="light">{children}</ThemeProvider>,
    ...options,
  });
};

export * from "@testing-library/react";
// override React Testing Library's render with our own
export { render };
