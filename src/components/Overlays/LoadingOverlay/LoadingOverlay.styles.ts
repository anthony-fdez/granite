import { SerializedStyles, css } from "@emotion/react";

interface Props {
  fullScreen: boolean;
}

export const getLoadingOverlayStyles = ({ fullScreen }: Props) => {
  const margin = 20;

  const stylesOpen: SerializedStyles = css([
    {
      position: "absolute",
      margin,
      height: `calc(100% - ${margin * 2}px)`,
      width: `calc(100% - ${margin * 2}px)`,
      overflow: "hidden",
      left: 0,
      right: 0,
    },
    fullScreen && {
      height: `calc(100vh - ${margin * 2}px)`,
      width: `calc(100%vw - ${margin * 2}px)`,
    },
  ]);

  const stylesClosed: SerializedStyles = css([stylesOpen, { pointerEvents: "none", opacity: 0 }]);

  return { stylesOpen, stylesClosed };
};
