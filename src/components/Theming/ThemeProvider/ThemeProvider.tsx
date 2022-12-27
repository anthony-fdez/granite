/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { Global } from "@emotion/react";
import { IStyles, IContext } from "./Interfaces/IStyles";
import { IProviderProps } from "./Interfaces/IProviderProps";
import DEFAULT_STYLES from "../../../constants/theme/defaultStyles";
import getGlobalStyles from "./ThemeProvider.styles";
import { BUTTON_DEFAULT_PROPS } from "../../Buttons/Button/Button.props";
import { MODAL_DEFAULT_PROPS } from "../../Overlays/Modal/Modal.props";
import { DIALOG_DEFAULT_PROPS } from "../../Overlays/Dialog/Dialog.props";
import { DIVIDER_DEFAULT_PROPS } from "../../Extra/Divider/Divider.props";
import { TEXT_INPUT_DEFAULT_PROPS } from "../../Inputs/TextInput/TextInput.props";
import { ACCORDION_DEFAULT_PROPS } from "../../DataDisplay/Accordion/Accordion.props";
import { CLOSE_BUTTON_DEFAULT_PROPS } from "../../Buttons/CloseButton/CloseButton.props";
import useStyles from "../../../styles/useStyles";
import { BACKDROP_DEFAULT_PROPS } from "../../Overlays/Backdrop/Backdrop.props";
import { DEFAULT_COLORS } from "../../../constants/theme/colors";

export const StateContext = createContext<IContext>({
  styles: DEFAULT_STYLES,
  setState: () => {},
});

const ThemeProvider = ({
  children,
  defaultStyles,
  theme = DEFAULT_STYLES.theme ?? "light",
  ...args
}: IProviderProps): JSX.Element => {
  const mergedStyles = {
    theme,
    global: { ...DEFAULT_STYLES.global, ...defaultStyles?.global },
    colors: { ...DEFAULT_COLORS, ...defaultStyles?.colors },
    components: {
      Button: {
        ...BUTTON_DEFAULT_PROPS,
        ...defaultStyles?.components?.Button,
      },
      CloseButton: {
        ...CLOSE_BUTTON_DEFAULT_PROPS,
        ...defaultStyles?.components?.CloseButton,
      },
      Modal: {
        ...MODAL_DEFAULT_PROPS,
        ...defaultStyles?.components?.Modal,
      },
      Dialog: {
        ...DIALOG_DEFAULT_PROPS,
        ...defaultStyles?.components?.Dialog,
      },
      Divider: {
        ...DIVIDER_DEFAULT_PROPS,
        ...defaultStyles?.components?.Divider,
      },
      TextInput: {
        ...TEXT_INPUT_DEFAULT_PROPS,
        ...defaultStyles?.components?.TextInput,
      },
      Accordion: {
        ...ACCORDION_DEFAULT_PROPS,
        ...defaultStyles?.components?.Accordion,
      },
      Backdrop: {
        ...BACKDROP_DEFAULT_PROPS,
        ...defaultStyles?.components?.Backdrop,
      },
    },
  };

  const [styles, setStyles] = useState<IStyles>(mergedStyles);
  const { getColor } = useStyles({ styles });

  const handleUpdateState = useCallback(
    (newState: IStyles): void => {
      setStyles({ ...styles, ...newState });
    },
    [styles],
  );

  const memoizedStyles = useMemo(() => ({ styles, setState: handleUpdateState }), [styles, handleUpdateState]);

  useEffect(() => {
    if (!defaultStyles) return;

    handleUpdateState(mergedStyles);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <StateContext.Provider value={memoizedStyles}>
      <Global styles={getGlobalStyles({ getColor })} />
      <div {...args}>{children}</div>
    </StateContext.Provider>
  );
};

export default ThemeProvider;
