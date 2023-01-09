export interface IHoverListenerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
  onHover: (isHover: boolean) => void;
}
