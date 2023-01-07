/* eslint-disable import/no-extraneous-dependencies */
import { SerializedStyles, css } from "@emotion/react";
import { GetColorProps } from "../../styles/useStyles";
import IUseStyles from "../../styles/interfaces/IUseStyles";

interface Props {
  getColor: (props: GetColorProps) => IUseStyles;
}

const getGlobalStyles = ({ getColor }: Props): SerializedStyles => {
  return css({
    html: {
      backgroundColor: getColor({}).background,
      color: getColor({}).font,
      fontFamily: "Trebuchet MS",
    },
  });
};

export default getGlobalStyles;
