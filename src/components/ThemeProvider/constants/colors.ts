export type ColorsType = "red" | "orange" | "blue" | "oceanBlue";

type fixedArraySize = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

export interface IColorShades {
  red: fixedArraySize;
  orange: fixedArraySize;
  blue: fixedArraySize;
  oceanBlue: fixedArraySize;
}
export const colors: IColorShades = {
  red: [
    "rgb(255, 59, 48)",
    "rgb(255, 59, 48)",
    "rgb(255, 59, 48)",
    "rgb(255, 59, 48)",
    "rgb(255, 59, 48)",
    "rgb(255, 59, 48)",
    "rgb(255, 59, 48)",
    "rgb(255, 59, 48)",
    "rgb(255, 59, 48)",
    "rgb(255, 59, 48)",
  ],
  orange: [
    "rgb(255, 150, 0)",
    "rgb(255, 150, 0)",
    "rgb(255, 150, 0)",
    "rgb(255, 150, 0)",
    "rgb(255, 150, 0)",
    "rgb(255, 150, 0)",
    "rgb(255, 150, 0)",
    "rgb(255, 150, 0)",
    "rgb(255, 150, 0)",
    "rgb(255, 150, 0)",
  ],
  // yellow: [],
  // green: [],
  // mint: [],
  // teal: [],
  // cyan: [],
  blue: [
    "rgb(0, 122, 255)",
    "rgb(0, 122, 255)",
    "rgb(0, 122, 255)",
    "rgb(0, 122, 255)",
    "rgb(0, 122, 255)",
    "rgb(0, 122, 255)",
    "rgb(0, 122, 255)",
    "rgb(0, 122, 255)",
    "rgb(0, 122, 255)",
    "rgb(0, 122, 255)",
  ],
  oceanBlue: [
    "#7AD1DD",
    "#5FCCDB",
    "#44CADC",
    "#2AC9DE",
    "#1AC2D9",
    "#11B7CD",
    "#09ADC3",
    "#0E99AC",
    "#128797",
    "#147885",
  ],
  // indigo: [],
  // purple: [],
  // pink: [],
  // brown: [],
  // white: [],
  // black: [],
};
