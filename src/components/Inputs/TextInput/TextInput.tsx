/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext, useRef } from "react";
import { ITextInputProps } from "./TextInput.types";
import { useTextInputDefaultProps } from "./TextInput.props";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { getTextInputStyles } from "./TextInput.styles";
import { DEFAULT_COLORS } from "../../../constants/theme/colors";

const TextInput = (props: ITextInputProps) => {
  const { styles } = useContext(StateContext);

  const {
    autofocus,
    color,
    defaultValue,
    disabled,
    error,
    errorText,
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
        getTextInputStyles({ styles, variant, color, disabled, error, margin }),
        margin && { margin },
      ]}
      {...args}
    >
      {label && (
        <p className="input-label">
          {label}
          {required && (
            <span style={{ color: DEFAULT_COLORS.red[6], marginLeft: 2 }}>
              *
            </span>
          )}
        </p>
      )}
      {helperText && <p className="input-helper-text">{helperText}</p>}
      <input
        css={[padding && { padding }, borderRadius && { borderRadius }]}
        disabled={disabled}
        placeholder={placeholder}
        className={`INPUT ${classes}`}
        autoFocus={autofocus}
        required={required}
      />
      {errorText && <p className="input-error-text">{errorText}</p>}
    </div>
  );
};

export default TextInput;
