import React from 'react'
import PropTypes from 'prop-types'
import SlidingPane from 'react-sliding-pane'
import Scrollbars from 'react-custom-scrollbars'

import { ReactComponent as IconLeft } from 'Icons/tailwind-icons/icon-panel-left.svg'

import 'react-sliding-pane/dist/react-sliding-pane.css'
import './leftStyle.scss'

// needed for console warnings
import Modal from 'react-modal'
Modal.setAppElement(document.getElementById('app'))

const SlideLeft = ({ isOpen, onClose, title = '', overlayVariant = '', children }) => {
    return (
        <SlidingPane
            overlayClassName={`boost-slide-left-panel top-3.3 bg-background-primary ${overlayVariant} `}
            from='left'
            width='100%'
            isOpen={isOpen}
            title={title}
            >
            <div className='flex align-center'>
                <IconLeft
                    className='font-color font-bold cursor-pointer m-4'
                    onClick={onClose}
                />
                {title}
            </div>
            <Scrollbars style={{ height: 'calc(100vh - 116px)' }}>
                {children}
            </Scrollbars>
        </SlidingPane>

    )
}

SlideLeft.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
    overlayVariant: PropTypes.string,
    children: PropTypes.any,
}

export default SlideLeft
