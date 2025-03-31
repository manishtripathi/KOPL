import React from 'react'

interface IconProps {
  variant?: any
  icon: ReactElement
}
interface AtomLinkProps {
  text?: string | React.ReactElement
  variant?: any
  isNewTab?: boolean
  scrollTop?: boolean
  href?: string
  startIcon?: React.ReactElement
  endIcon?: React.ReactElement
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  className?: string
  underline?: 'always' | 'hover' | 'none'
  isExternal?: boolean
  children?: any
}
export { AtomLinkProps, IconProps, VariantType }