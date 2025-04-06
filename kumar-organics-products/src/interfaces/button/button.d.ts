// Interface for Atom Button props
interface AtomButtonProps {
    disable?: boolean
    type?: 'button' | 'submit' | 'reset'
    onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void
    onMouseDown?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void
    color?: 'primary' | 'secondary' | 'inherit' | 'info'
    variant?: 'contained' | 'outlined' | 'text'
    disableElevation?: boolean
    disableFocusRipple?: boolean
    size?: 'small' | 'medium' | 'large'
    name?: string
    fullWidth?: boolean
    startIcon?: React.ReactElement
    endIcon?: React.ReactElement
    className?: string
    form?: string
    children?: ReactNode
}
  
export { AtomButtonProps }