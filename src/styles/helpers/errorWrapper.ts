import IMethodProps from "../interfaces/IMethodProps";

interface Props {
  callback: (props: IMethodProps) => string | undefined;
  props: IMethodProps;
}

const errorWrapper = ({ props, callback }: Props): string => {
  if (!props.styles.colors) throw new Error("No colors found in styles object");

  const value = callback(props);

  if (value === undefined) throw new Error(`'${props.color}' is not found in the colors object`);

  return value;
};

export default errorWrapper;
