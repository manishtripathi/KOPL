import React, { JSX } from 'react'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { TabsItemProps, TabsProps } from '../../interfaces/tabs/tabs'
import './tabs.scss'

const AtomTabs: React.FC<TabsProps> = ({
  value,
  variant,
  onChange,
  children,
  scrollButtons,
  centered,
}): JSX.Element => {
  return (
    <Tabs
      value={value}
      variant={variant}
      onChange={onChange}
      scrollButtons={scrollButtons}
      allowScrollButtonsMobile={true}
      centered={centered}
    >
      {children?.map((item: TabsItemProps, index: number) => {
        return (
          <Tab
            icon={item.Icon}
            key={item.text + index}
            label={item.label || item.text}
            disabled={item.disabled}
          />
        )
      })}
    </Tabs>
  )
}

export default AtomTabs