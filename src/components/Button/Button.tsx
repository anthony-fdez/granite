import React, { useContext } from "react";
import { State } from "../ThemeProvider/ThemeProvider";
import styles from "./button.module.css";
import { IButtonProps } from "./IButtonProps";

const Button = ({ label }: IButtonProps) => {
  const state = useContext(State);

  if (!state) throw new Error("Missing ThemeProvider");

  return <button className={styles.button}>{label}</button>;
};

export default Button;
