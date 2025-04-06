import { CtaItemProps } from '../promotionalContent/promotionalContent'
export interface AtomModalProps {
  isOpen: boolean
  onClose: () => void
  onBackClick?: () => void
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  detectOutSideFlag?: boolean
  isCloseRequired?: boolean
  hasBackButton?: boolean
}

export interface AtomImageModalProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  detectOutSideFlag?: boolean
  image: string
  title: string | React.ReactElement
  description: string | React.ReactElement
  onClick?: (item: CtaItemProps) => void
  buttons?: CtaItemProps[]
  noOfButtons: number
  fileType?: string
  videoUrl?: string
}