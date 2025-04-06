import { TabPanelProps } from '../../interfaces/tabs/tabs'

const AtomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, id = 'simple', ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${id}-tabpanel-${index}`}
      aria-labelledby={`${id}-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

export default AtomTabPanel