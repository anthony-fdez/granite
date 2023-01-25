/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { css } from "@emotion/react";

import React from "react";
import { ITextInputProps } from "./TextInput.types";
import { useTextInputDefaultProps } from "./TextInput.props";
import Spinner from "../Spinner";
import useStyles from "../../styles/useStyles";
import useAppContext from "../../utils/hooks/useAppContext";
import getInputStyles from "../../utils/sharedStyles/getInputStyles";

const TextInput = (props: ITextInputProps): JSX.Element => {
  const { styles } = useAppContext();

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
    loading,
    iconLeft,
    borderRadius,
    inputProps,
    customCSS,
    ...args
  } = useTextInputDefaultProps({ styles, props });

  const { getColor } = useStyles({ styles, color });

  return (
    <div
      css={[
        getInputStyles({
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
          styles,
        }),
        margin && { margin },
        fullWidth && { width: `calc(100% - ${margin ? margin * 2 : 0}px)` },
        customCSS,
      ]}
      {...args}
    >
      {label && (
        <p className="Granite-Input-label">
          {label}
          {required && <span style={{ color: styles.colors?.red?.[6], marginLeft: 2 }}>*</span>}
        </p>
      )}
      {helperText && <p className="Granite-Input-helperText">{helperText}</p>}
      <div className="Granite-Input-inputWrapper">
        {iconLeft && <span className="Granite-Input-iconLeft">{iconLeft}</span>}

        <input
          {...inputProps}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autofocus}
          className="Granite-Input-input"
          css={[padding && { padding }, borderRadius && { borderRadius }]}
          defaultValue={defaultValue}
          disabled={disabled}
          name={name}
          onChange={onChange} // Even tho this is not recommended, the user can decide if they ant it or not
          placeholder={placeholder}
          required={required}
          type={type}
          value={value}
        />
        {loading && (
          <span className="Granite-Input-spinner">
            <Spinner color={color} variant="circular" />
          </span>
        )}
      </div>

      {errorText && <p className="Granite-Input-errorText">{errorText}</p>}
    </div>
  );
};

export default TextInput;
