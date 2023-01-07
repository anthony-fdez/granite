export interface IClickAwayListenerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  onClickOutside: () => void;
}
