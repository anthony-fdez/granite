export type AvailableColorsType = "red" | "blue";

type ColorOptions = {
  backgroundColor: string;
  fontColor: string;
};

type Variants = {
  filled: ColorOptions;
  subtle: ColorOptions;
  outlined: ColorOptions;
  light: ColorOptions;
};

type ColorType = {
  light: Variants;
  dark: Variants;
};

export interface IColorShades {
  red: ColorType;
  blue: ColorType;
}
export const colors: IColorShades = {
  red: {
    light: {
      filled: {
        backgroundColor: "rgb(255, 59, 48)",
        fontColor: "rgb(255, 255, 255)",
      },
      subtle: {
        backgroundColor: "rgb(255, 230, 230)",
        fontColor: "rgb(255, 59, 48)",
      },
      outlined: {
        backgroundColor: "rgb(255, 59, 48)",
        fontColor: "rgb(255, 255, 255)",
      },
      light: {
        backgroundColor: "rgb(255, 59, 48)",
        fontColor: "rgb(255, 255, 255)",
      },
    },
    dark: {
      filled: {
        backgroundColor: "rgb(255, 59, 48)",
        fontColor: "rgb(255, 255, 255)",
      },
      subtle: {
        backgroundColor: "rgb(255, 59, 48)",
        fontColor: "rgb(255, 255, 255)",
      },
      outlined: {
        backgroundColor: "rgb(255, 59, 48)",
        fontColor: "rgb(255, 255, 255)",
      },
      light: {
        backgroundColor: "rgb(255, 59, 48)",
        fontColor: "rgb(255, 255, 255)",
      },
    },
  },
  blue: {
    light: {
      filled: {
        backgroundColor: "rgb(0, 122, 255)",
        fontColor: "rgb(255, 255, 255)",
      },
      subtle: {
        backgroundColor: "rgb(0, 122, 255)",
        fontColor: "rgb(255, 255, 255)",
      },
      outlined: {
        backgroundColor: "rgb(0, 122, 255)",
        fontColor: "rgb(255, 255, 255)",
      },
      light: {
        backgroundColor: "rgb(0, 122, 255)",
        fontColor: "rgb(255, 255, 255)",
      },
    },
    dark: {
      filled: {
        backgroundColor: "rgb(0, 122, 255)",
        fontColor: "rgb(255, 255, 255)",
      },
      subtle: {
        backgroundColor: "rgb(0, 122, 255)",
        fontColor: "rgb(255, 255, 255)",
      },
      outlined: {
        backgroundColor: "rgb(0, 122, 255)",
        fontColor: "rgb(255, 255, 255)",
      },
      light: {
        backgroundColor: "rgb(0, 122, 255)",
        fontColor: "rgb(255, 255, 255)",
      },
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
