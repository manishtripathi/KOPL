import React from 'react'

interface AtomTextFieldProps {
  autoComplete?: 'off' | 'on'
  type?: string
  name?: string
  value?: string
  required?: boolean
  focused?: boolean
  label?: React.ReactNode
  variant?: 'standard' | 'filled' | 'outlined'
  disabled?: boolean
  readOnly?: boolean
  imageTitle?: string
  helperText?: string | ReactElement<any>
  fullWidth?: boolean
  color?: 'primary' | 'error'
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  multiline?: boolean
  shrinkLabel?: boolean
  maxRows?: number | string
  minRows?: number | string
  margin?: 'normal' | 'dense' | 'none'
  placeholder?: string
  className?: string
  id?: string
  maxLength?: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  focusEvent?: (event: React.FocusEvent<HTMLInputElement>) => void
  blurEvent?: (event: React.FocusEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void
  className?: string
  maxLength?: number
  error?: boolean
  tooltip?: boolean
  tooltipContent?: element | string
  tooltipDirection?: AtomTooltipProps.direction
  toolTipId?: string
  minLength?: number | null
}

export { AtomTextFieldProps }
