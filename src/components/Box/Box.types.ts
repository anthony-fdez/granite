export interface IBoxProps {
  children: JSX.Element | JSX.Element[];
  justifyContent?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around";
}
