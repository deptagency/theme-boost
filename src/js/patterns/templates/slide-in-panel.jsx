import React from 'react'
import PropTypes from 'prop-types'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import { Scrollbars } from 'react-custom-scrollbars'

// needed for console warnings
import Modal from 'react-modal'
Modal.setAppElement(document.getElementById('app'))

const TemplatesSlideInPanel = ({ isOpen, children, header, from }) => {
    return (
        <SlidingPane
            className='slide-up-panel'
            overlayClassName='some-custom-overlay-class'
            isOpen={isOpen}
            from={from}
            width={'100%'}
            >
            {header}
            <Scrollbars autoHide style={{
                height: 'calc(100% - 48px)',
                minHeight: '500px',
            }}>
                {children}
            </Scrollbars>

        </SlidingPane>
    )
}

TemplatesSlideInPanel.defaultProps = {
    isOpen: false,
    from: 'bottom',
}

TemplatesSlideInPanel.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    header: PropTypes.node.isRequired,
    from: PropTypes.string.isRequired,
}

export default TemplatesSlideInPanel
