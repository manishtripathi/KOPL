import { Button } from '@mui/material'
import React, { JSX } from 'react'
import { AtomButtonProps } from '../../interfaces/button/button'
import './button.scss'

// Component for Atom Button
const AtomButton = React.forwardRef<HTMLButtonElement, AtomButtonProps>(
  (
    {
      disable = false,
      type = 'button',
      onMouseDown,
      onClick,
      color,
      variant = 'text',
      disableElevation = false,
      disableFocusRipple = false,
      size = 'small',
      name,
      fullWidth = false,
      startIcon,
      endIcon,
      children,
      className,
      form,
    },
    ref
  ): JSX.Element => {
    // Handler for click event on Button
    const handleAtomButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!disable && onClick) {
        onClick(event)
      }
    }

    return (
      <Button
        ref={ref}
        disabled={disable}
        type={type}
        onMouseDown={onMouseDown}
        onClick={handleAtomButtonClick}
        color={color}
        variant={variant}
        disableElevation={disableElevation}
        disableFocusRipple={disableFocusRipple}
        size={size}
        name={name}
        fullWidth={fullWidth}
        startIcon={startIcon}
        endIcon={endIcon}
        className={className}
        form={form}
      >
        {children}
      </Button>
    )
  }
)
export default AtomButton