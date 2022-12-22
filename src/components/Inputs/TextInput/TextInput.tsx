/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React, { useContext } from "react";
import { ITextInputProps } from "./TextInput.types";
import { useTextInputDefaultProps } from "./TextInput.props";
import { StateContext } from "../../Theming/ThemeProvider/ThemeProvider";
import getTextInputStyles from "./TextInput.styles";
import { DEFAULT_COLORS } from "../../../constants/theme/colors";
import Spinner from "../../Feedback/Spinner";
import useStyles from "../../../styles/useStyles";

const TextInput = (props: ITextInputProps): JSX.Element => {
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

  const { getColor } = useStyles({ styles, color });

  return (
    <div
      css={[
        getTextInputStyles({
          variant,
          disabled,
          error,
          margin,
          fullWidth,
          padding,
          width,
          iconLeft,
          loading,
          getColor,
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
        {iconLeft && <span className="input-icon-left">{iconLeft}</span>}

        <input
          {...inputProps}
          type={type}
          css={[padding && { padding }, borderRadius && { borderRadius }]}
          disabled={disabled}
          placeholder={placeholder}
          className={`INPUT ${classes}`}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autofocus} // Even tho this is not recommended, the user can decide if they ant it or not
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
