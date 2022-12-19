/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useContext } from "react";
import { ITextInputProps } from "./TextInput.types";
import { useTextInputDefaultProps } from "./TextInput.props";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import { getTextInputStyles } from "./TextInput.styles";
import { DEFAULT_COLORS } from "../../../constants/theme/colors";
import Spinner from "../../Feedback/Spinner";

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
    label,
    margin,
    padding,
    width,
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
    inputProps,
    ...args
  } = useTextInputDefaultProps({ styles, props });

  return (
    <div
      css={[
        getTextInputStyles({
          styles,
          variant,
          color,
          disabled,
          error,
          margin,
          fullWidth,
          padding,
          width,
          iconLeft,
          loading,
        }),
        margin && { margin },
        fullWidth && { width: `calc(100% - ${margin ? margin * 2 : 0}px)` },
      ]}
      {...args}
    >
      {label && (
        <p className="input-label">
          {label}
          {required && <span style={{ color: DEFAULT_COLORS.red[6], marginLeft: 2 }}>*</span>}
        </p>
      )}
      {helperText && <p className="input-helper-text">{helperText}</p>}
      <div className="input-wrapper">
        {iconLeft && <span className="input-icon-left">L</span>}

        <input
          {...inputProps}
          type={type}
          css={[padding && { padding }, borderRadius && { borderRadius }]}
          disabled={disabled}
          placeholder={placeholder}
          className={`INPUT ${classes}`}
          autoFocus={autofocus}
          required={required}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
        />
        {loading && (
          <span className="input-loading">
            <Spinner variant="circular" color={color} />
          </span>
        )}
      </div>

      {errorText && <p className="input-error-text">{errorText}</p>}
    </div>
  );
};

export default TextInput;
