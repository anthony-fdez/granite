export interface IClickAwayListenerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onClickOutside: () => void;
  children: JSX.Element | JSX.Element[];
}
