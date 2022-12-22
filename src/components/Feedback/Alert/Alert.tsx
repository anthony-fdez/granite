import React from "react";
import { IAlertProps } from "./Alert.types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Alert = (props: IAlertProps): JSX.Element => {
  // eslint-disable-next-line no-console
  console.log(props);

  return <div role="alert">alert</div>;
};

export default Alert;
