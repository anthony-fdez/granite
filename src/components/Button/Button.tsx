import React, { useContext } from "react";
import { StateContext } from "../ThemeProvider/ThemeProvider";
import styles from "./button.module.css";
import { IButtonProps } from "./IButtonProps";

const Button = ({ label }: IButtonProps) => {
  const { state } = useContext(StateContext);

  return <button className={styles.button}>{label}</button>;
};

export default Button;
