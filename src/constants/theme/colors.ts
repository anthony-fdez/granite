export type AvailableColorsType = "red" | "blue";

type ColorOptions = {
  backgroundColor: string;
  backgroundColorHover: string;
  fontColor: string;
};

type Variants = {
  filled: ColorOptions;
  subtle: ColorOptions;
  outlined: ColorOptions;
};

type ColorType = {
  light: Variants;
  dark: Variants;
};

type Common = {
  backgroundColor: string;
  fontColor: string;
};

export interface IColorShades {
  common: {
    light: Common;
    dark: Common;
  };
  red: ColorType;
  blue: ColorType;
}
export const colors: IColorShades = {
  common: {
    light: {
      backgroundColor: "rgb(255, 255, 255)",
      fontColor: "rgb(10, 10, 10)",
    },
    dark: {
      backgroundColor: "rgb(20, 20, 20)",
      fontColor: "rgb(255, 255, 255)",
    },
  },
  red: {
    light: {
      filled: {
        backgroundColor: "rgb(255, 59, 48)",
        backgroundColorHover: "rgb(225, 30, 30)",
        fontColor: "rgb(255, 255, 255)",
      },
      subtle: {
        backgroundColor: "rgb(255, 230, 230)",
        backgroundColorHover: "rgb(255, 220, 220)",

        fontColor: "rgb(255, 59, 48)",
      },
      outlined: {
        backgroundColor: "rgb(255, 59, 48)",
        backgroundColorHover: "rgb(255, 69, 58)",
        fontColor: "rgb(255, 255, 255)",
      },
    },
    dark: {
      filled: {
        backgroundColor: "rgb(255, 59, 48)",
        backgroundColorHover: "rgb(255, 69, 58)",

        fontColor: "rgb(255, 255, 255)",
      },
      subtle: {
        backgroundColor: "rgb(255, 59, 48)",
        backgroundColorHover: "rgb(255, 69, 58)",

        fontColor: "rgb(255, 255, 255)",
      },
      outlined: {
        backgroundColor: "rgb(255, 59, 48)",
        backgroundColorHover: "rgb(255, 69, 58)",

        fontColor: "rgb(255, 255, 255)",
      },
    },
  },
  blue: {
    light: {
      filled: {
        backgroundColor: "rgb(0, 122, 255)",
        backgroundColorHover: "rgb(255, 69, 58)",

        fontColor: "rgb(255, 255, 255)",
      },
      subtle: {
        backgroundColor: "rgb(0, 122, 255)",
        backgroundColorHover: "rgb(255, 69, 58)",

        fontColor: "rgb(255, 255, 255)",
      },
      outlined: {
        backgroundColor: "rgb(0, 122, 255)",
        backgroundColorHover: "rgb(255, 69, 58)",

        fontColor: "rgb(255, 255, 255)",
      },
    },
    dark: {
      filled: {
        backgroundColor: "rgb(0, 122, 255)",
        backgroundColorHover: "rgb(255, 69, 58)",
        fontColor: "rgb(255, 255, 255)",
      },
      subtle: {
        backgroundColor: "rgb(0, 122, 255)",
        backgroundColorHover: "rgb(255, 69, 58)",

        fontColor: "rgb(255, 255, 255)",
      },
      outlined: {
        backgroundColor: "rgb(0, 122, 255)",
        backgroundColorHover: "rgb(255, 69, 58)",
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
