import { ISizes } from "./../../../../types/sizes";
interface Props {
  size?: ISizes;
}
export const getBorderRadius = ({ size }: Props): number => {
  const DEFAULT = 5;

  if (!size) return DEFAULT;

  if (size === "xs") return 0;
  if (size === "sm") return DEFAULT;
  if (size === "md") return 7;
  if (size === "lg") return 10;
  if (size === "xl") return 50;

  return size;
};
