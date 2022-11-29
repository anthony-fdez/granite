export type AvailableColorsType = "red" | "blue";

type ColorOptions = {
  background: string;
  backgroundHover: string;
  font: string;
};

type Variants = {
  color: string;
  filled: ColorOptions;
  subtle: ColorOptions;
  outlined: ColorOptions;
};

type Common = {
  background: string;
  backgroundAccent: string;
  font: string;
  border: string;
};

export interface IColorShades {
  common: {
    light: Common;
    dark: Common;
  };
  red: Variants;
  blue: Variants;
}

export const colors: IColorShades = {
  common: {
    light: {
      background: "rgb(255, 255, 255)",
      backgroundAccent: "rgb(233, 233, 233)",
      font: "rgb(10, 10, 10)",
      border: "rgb(200, 200, 200)",
    },
    dark: {
      background: "rgb(20, 20, 20)",
      backgroundAccent: "rgb(50, 50, 50)",
      font: "rgb(255, 255, 255)",
      border: "rgb(70, 70, 70)",
    },
  },
  red: {
    color: "rgb(255, 59, 48)",
    filled: {
      background: "rgb(255, 59, 48)",
      backgroundHover: "rgb(225, 30, 30)",
      font: "rgb(255, 255, 255)",
    },
    subtle: {
      background: "rgb(255, 230, 230)",
      backgroundHover: "rgb(255, 220, 220)",
      font: "rgb(255, 59, 48)",
    },
    outlined: {
      background: "rgb(255, 59, 48)",
      backgroundHover: "rgb(255, 69, 58)",
      font: "rgb(255, 255, 255)",
    },
  },
  blue: {
    color: "rgb(0, 122, 255)",
    filled: {
      background: "rgb(0, 122, 255)",
      backgroundHover: "rgb(0, 90, 255)",
      font: "rgb(255, 255, 255)",
    },
    subtle: {
      background: "rgb(230, 230, 255)",
      backgroundHover: "rgb(220, 220, 255)",
      font: "rgb(0, 122, 255)",
    },
    outlined: {
      background: "rgb(0, 122, 255)",
      backgroundHover: "rgb(0, 122, 255)",
      font: "rgb(255, 255, 255)",
    },
  },
  // red: [
  //   "rgb(255, 59, 48)",
  //   "rgb(255, 59, 48)",
  //   "rgb(255, 59, 48)",
  //   "rgb(255, 59, 48)",
  //   "rgb(255, 59, 48)",
  //   "rgb(255, 59, 48)",
  //   "rgb(255, 59, 48)",
  //   "rgb(255, 59, 48)",
  //   "rgb(255, 59, 48)",
  //   "rgb(255, 59, 48)",
  // ],
  // orange: [
  //   "rgb(255, 150, 0)",
  //   "rgb(255, 150, 0)",
  //   "rgb(255, 150, 0)",
  //   "rgb(255, 150, 0)",
  //   "rgb(255, 150, 0)",
  //   "rgb(255, 150, 0)",
  //   "rgb(255, 150, 0)",
  //   "rgb(255, 150, 0)",
  //   "rgb(255, 150, 0)",
  //   "rgb(255, 150, 0)",
  // ],
  // yellow: [],
  // green: [],
  // mint: [],
  // teal: [],
  // cyan: [],
  // blue: [
  //   "rgb(0, 122, 255)",
  //   "rgb(0, 122, 255)",
  //   "rgb(0, 122, 255)",
  //   "rgb(0, 122, 255)",
  //   "rgb(0, 122, 255)",
  //   "rgb(0, 122, 255)",
  //   "rgb(0, 122, 255)",
  //   "rgb(0, 122, 255)",
  //   "rgb(0, 122, 255)",
  //   "rgb(0, 122, 255)",
  // ],
  // oceanBlue: [
  //   "#7AD1DD",
  //   "#5FCCDB",
  //   "#44CADC",
  //   "#2AC9DE",
  //   "#1AC2D9",
  //   "#11B7CD",
  //   "#09ADC3",
  //   "#0E99AC",
  //   "#128797",
  //   "#147885",
  // ],
  // indigo: [],
  // purple: [],
  // pink: [],
  // brown: [],
  // white: [],
  // black: [],
};
