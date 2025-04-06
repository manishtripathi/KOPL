import React from 'react'

export interface TabsProps {
  value?: element | string
  variant: 'fullWidth' | 'scrollable' | 'standard'
  children: element | string
  onChange?: (event: React.SyntheticEvent<Element, Event>, value: any) => void
  icon?: element | string
  scrollButtons?: boolean
  centered?: boolean
}

export interface TabPanelProps {
  children: element | string
  index: number
  value: element | string
  className?: string
  id?: string
}

export interface TabsItemProps {
  Icon?: React.ReactElement | string
  text: string
  label?: React.ReactElement | string
  Icon: React.ReactElement
  disabled?: boolean
}