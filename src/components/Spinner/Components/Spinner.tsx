import React from "react";
import { css } from "@emotion/react";
import { SpinnersType } from "../../../types/spinners";

export interface SpinnerProps {
  variant?: SpinnersType;
}

const Spinner = ({ variant = "circular" }: SpinnerProps) => {
  return <span>Spinner</span>;
};

export default Spinner;
