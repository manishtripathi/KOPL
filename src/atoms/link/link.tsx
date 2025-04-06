import { Link } from '@mui/material'
import React, { JSX } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AtomLinkProps, IconProps } from '../../interfaces/link/link'
import { NEW_TAB, SAME_TAB } from '../../helpers/constant/constant'
import './link.scss'

const Icon: React.FC<IconProps> = React.memo(({ variant, icon }) =>
  variant ? <div className={variant}>{icon}</div> : icon
)

const AtomLink: React.FC<AtomLinkProps> = ({
  text,
  variant,
  href,
  isNewTab = false,
  startIcon,
  endIcon,
  underline = 'none',
  className,
  children,
  onClick,
  isExternal = false,
}): JSX.Element => {
    const target = isNewTab ? NEW_TAB : SAME_TAB
  const onClickHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <Link
      to={href}
      href={href}
      className={className}
      underline={underline}
      target={target}
      onClick={onClickHandler}
      rel="noreferrer"
      variant={variant}
      component={isExternal ? Link : RouterLink}
    >
      {startIcon && <Icon variant={variant} icon={startIcon} />}
      {text}
      {endIcon && <Icon variant={variant} icon={endIcon} />}
      {children}
    </Link>
  )
}
export default AtomLink
