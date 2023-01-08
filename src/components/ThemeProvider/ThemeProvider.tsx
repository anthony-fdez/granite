/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { Global } from "@emotion/react";
import { IStyles, IContext } from "./Interfaces/IStyles";
import { IProviderProps } from "./Interfaces/IProviderProps";
import DEFAULT_STYLES from "../../constants/theme/defaultStyles";
import getGlobalStyles from "./ThemeProvider.styles";
import { BUTTON_DEFAULT_PROPS } from "../Button/Button.props";
import { MODAL_DEFAULT_PROPS } from "../Modal/Modal.props";
import { DIALOG_DEFAULT_PROPS } from "../Dialog/Dialog.props";
import { DIVIDER_DEFAULT_PROPS } from "../Divider/Divider.props";
import { TEXT_INPUT_DEFAULT_PROPS } from "../TextInput/TextInput.props";
import { ACCORDION_DEFAULT_PROPS } from "../Accordion/Accordion.props";
import { CLOSE_BUTTON_DEFAULT_PROPS } from "../CloseButton/CloseButton.props";
import useStyles from "../../styles/useStyles";
import { BACKDROP_DEFAULT_PROPS } from "../Backdrop/Backdrop.props";
import { DEFAULT_COLORS } from "../../constants/theme/colors";
import { LOADING_OVERLAY_DEFAULT_PROPS } from "../LoadingOverlay/LoadingOverlay.props";
import { DRAWER_DEFAULT_PROPS } from "../Drawer/Drawer.props";

export const StateContext = createContext<IContext>({
  setState: () => {},
  styles: null,
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
      Drawer: {
        ...DRAWER_DEFAULT_PROPS,
        ...defaultStyles?.components?.Drawer,
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
      LoadingOverlay: {
        ...LOADING_OVERLAY_DEFAULT_PROPS,
        ...defaultStyles?.components?.LoadingOverlay,
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
