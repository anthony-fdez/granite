/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext, useRef } from "react";
import { ITextInputProps } from "./TextInput.types";
import { useTextInputDefaultProps } from "./TextInput.props";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { getTextInputStyles } from "./TextInput.styles";

const TextInput = (props: ITextInputProps) => {
  const { styles } = useContext(StateContext);

  const {
    autofocus,
    color,
    defaultValue,
    disabled,
    error,
    fullWidth,
    helperText,
    inputProps,
    label,
    margin,
    padding,
    name,
    multiline,
    onChange,
    placeholder,
    required,
    type,
    value,
    variant,
    classes,
    loading,
    iconLeft,
    borderRadius,
    ...args
  } = useTextInputDefaultProps({ styles, props });

  return (
    <div
      css={[
        getTextInputStyles({ styles, variant, color, disabled }),
        margin && { margin },
      ]}
      {...args}
    >
      <input
        css={[padding && { padding }, borderRadius && { borderRadius }]}
        disabled={disabled}
        placeholder={placeholder}
        className={`INPUT ${classes}`}
        autoFocus={autofocus}
        required={required}
      />
    </div>
  );
};

export default TextInput;
