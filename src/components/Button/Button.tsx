import React from "react";
import styles from "./button.module.css";
import { IButtonProps } from "./IButtonProps";

const Button = ({ label }: IButtonProps) => {
  return <button className={styles.button}>{label}</button>;
};

export default Button;
