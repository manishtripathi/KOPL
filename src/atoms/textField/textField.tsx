import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import classNames from 'classnames'
import React, { useRef } from 'react'
import { AtomTextFieldProps } from '../../interfaces/textField/textField'
import './textField.scss'

const AtomTextField = React.forwardRef<HTMLInputElement, AtomTextFieldProps>(
  (
    {
      autoComplete = 'off',
      helperText,
      required,
      disabled = false,
      readOnly = false,
      focused = false,
      variant,
      type,
      name,
      value = '',
      fullWidth = false,
      color = 'primary',
      multiline = false,
      maxRows = 3,
      minRows = 1,
      startAdornment,
      endAdornment,
      margin = 'normal',
      placeholder = '',
      onChange,
      blurEvent,
      onKeyDown,
      onKeyUp,
      onPaste,
      focusEvent,
      onKeyPress,
      className,
      id = '',
      label = '',
      maxLength,
      error,
      tooltip = false,
      tooltipContent = '',
      tooltipDirection = 'bottom',
      // shrinkLabel = false,
      minLength,
    },
    ref
  ) => {
    const inputRef: any = useRef(ref)
    React.useEffect(() => {
      setTimeout(() => {
        if (focused && inputRef?.current instanceof HTMLInputElement && readOnly === false) {
          inputRef.current.focus()
        }
      }, 100)
    }, [focused, ref])
    const helperTextData =
      typeof helperText === 'string' ? (
        <span
          className={classNames({ 'MuiFormHelperText-root Mui-error': error || color === 'error' })}
        >
          {helperText}
        </span>
      ) : (
        <>{helperText}</>
      )

    const onFocusEvent = (e: any) => {
      const win: any = window
      /* eslint-disable-next-line */
      win.focussedElement = { target: inputRef.current, targetEvent: onChange }
      if (focusEvent) {
        focusEvent(e)
      }
    }

    // wrapper to handle virtual keyboard binding if present
    const onTextChange = (event: any) => {
      const win: any = window
      /* eslint-disable-next-line */
      const el = win?.currentKeyBoard
      if (el) {
        el?.current?.setInput(event?.target?.value)
      }
      if (onChange) onChange(event)
    }

    return (
        <TextField
            label={label}
            name={name}
            inputRef={inputRef}
            type={type}
            value={value}
            onChange={onTextChange}
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            onFocus={onFocusEvent}
            onBlur={blurEvent}
            onKeyPress={onKeyPress}
            onPaste={onPaste}
            variant={variant}
            fullWidth={fullWidth}
            multiline={multiline}
            color={error ? 'error' : color} // will replace color to 'primary' after other component implementation
            maxRows={maxRows}
            minRows={minRows}
            helperText={helperTextData}
            disabled={disabled}
            margin={margin}
            required={required}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className={className}
            id={id}
            inputProps={{
            maxLength: maxLength ? maxLength : null,
            minLength: minLength ? minLength : null,
            }}
            InputProps={{
            startAdornment: startAdornment ? (
                <InputAdornment position="start">{startAdornment}</InputAdornment>
            ) : null,
            endAdornment: endAdornment ? (
                <InputAdornment position="end">{endAdornment}</InputAdornment>
            ) : null,
            readOnly,
            }}
        />
    )
  }
)
export default AtomTextField