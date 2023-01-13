import { IStyles } from "./../ThemeProvider/Interfaces/IStyles";
import { ISkeletonPropsOptional } from "./Skeleton.types";

export const SKELETON_DEFAULT_PROPS: ISkeletonPropsOptional = {
  circle: false,
  height: 30,
  width: "100%",
  borderRadius: 0,
  count: 1,
  marginBottom: 10,
  animationSpeed: 2000,
};

interface Props {
  props: ISkeletonPropsOptional;
  styles: IStyles;
}

export const useSkeletonDefaultProps = ({ props, styles }: Props): ISkeletonPropsOptional => {
  const defaultProps = styles.components?.Skeleton;

  if (!defaultProps) return { ...props };

  return {
    ...styles.global,
    ...defaultProps,
    ...props,
  };
};
