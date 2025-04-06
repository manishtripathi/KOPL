import Grid from '@mui/material/Grid2'
import React, { useEffect, useRef, JSX } from 'react'
import ReactDOM from 'react-dom'
import { Dismiss } from '../../helpers/constant/imageUrl'
import { AtomModalProps } from '../../interfaces/modal/modal'
import './modal.scss'

const AtomModal: React.FC<AtomModalProps> = ({
  isOpen,
  onClose,
  children,
  className = '',
  containerClassName = '',
  detectOutSideFlag = false,
  isCloseRequired = true,
  hasBackButton = false,
  onBackClick,
}): JSX.Element => {
  const modalWrapperRef = useRef(null)
  // Need to revisit the below code.
  useEffect(() => {
    if (isOpen) document.body.classList.add('hide-scroll')
    return () => {
      if (isOpen) document.body.classList.remove('hide-scroll')
    }
  }, [isOpen])

  const detectOutSideHandler = (event: React.MouseEvent) => {
    if (event?.target === modalWrapperRef.current && detectOutSideFlag) onClose()
  }

  if (!isOpen) return <></>

  const getJustifyStyle = () => {
    if (hasBackButton && isCloseRequired) return 'space-between'
    if (hasBackButton && !isCloseRequired) return 'left'
    return 'right'
  }

  return ReactDOM.createPortal(
    <div ref={modalWrapperRef} className="modal-root" onClick={detectOutSideHandler}>
      <div className={`modal ${className}`}>
        {hasBackButton || isCloseRequired ? (
          <>
            <Grid container={true} justifyContent={getJustifyStyle()}>
              {isCloseRequired && (
                <Grid size={{ xs: 12 }}>
                  <div className={`text-right ${containerClassName}`}>
                    <img src={Dismiss} alt='' onClick={onClose} className="close-icon" />
                  </div>
                </Grid>
              )}
            </Grid>
          </>
        ) : null}

        <div className="modal__content" id="modal-scroll">
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default React.memo(AtomModal)