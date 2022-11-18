import React from "react";
import { IButtonProps } from "./IButtonProps";

const Button = ({ label }: IButtonProps) => {
  return <button>{label}</button>;
};

export default Button;
