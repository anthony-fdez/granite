import IMethodProps from "../interfaces/IMethodProps";

const GET_BACKGROUND_ACCENT = ({ styles, dark }: IMethodProps): string => {
  if (dark) return styles.colors.dark[7];

  return styles.colors.gray[2];
};

export default GET_BACKGROUND_ACCENT;
