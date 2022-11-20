export type ColorsType = "red" | "orange" | "blue";

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
  // indigo: [],
  // purple: [],
  // pink: [],
  // brown: [],
  // white: [],
  // black: [],
};
