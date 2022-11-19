export interface IState {
  theme?: "dark" | "light";
}

export interface IContext {
  state: IState;
  setState: (state: IState) => void;
}
