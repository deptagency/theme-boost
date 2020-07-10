import React from 'react'
import PropTypes from 'prop-types'
import SlidingPane from 'react-sliding-pane'
import Scrollbars from 'react-custom-scrollbars'

import { ReactComponent as PanelClose } from 'Icons/tailwind-icons/icon-panel-close.svg'

import 'react-sliding-pane/dist/react-sliding-pane.css'
import './bottomStyle.scss'

// needed for console warnings
import Modal from 'react-modal'
Modal.setAppElement(document.getElementById('app'))

const SlideBottom = ({ isOpen, onClose, title = '', overlayVariant = '', children }) => {
    return (
        <SlidingPane
            overlayClassName={`boost-slide-bottom-panel bg-white ${overlayVariant} `}
            from='bottom'
            width='100%'
            isOpen={isOpen}
            title={<div className='self-center text-2xl text-gray-800 font-bold mx-6 my-4'>{title}</div>}
            >
            <div className='flex align-center justify-between text-gray-800 m-5'>
                <div className='flex items-center text-2xl font-bold'>{title}</div>
                <PanelClose
                    className='text-2xl text-gray-800 font-bold cursor-pointer'
                    onClick={onClose}
                />
            </div>
            <div className='border-b-4 border-gray-100' />
            <Scrollbars style={{ height: 'calc(100vh - 116px)' }}>
                {children}
            </Scrollbars>
        </SlidingPane>

    )
}

SlideBottom.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.object]),
    overlayVariant: PropTypes.string,
    children: PropTypes.any.isRequired,
}

export default SlideBottom
