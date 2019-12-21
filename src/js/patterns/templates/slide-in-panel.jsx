import React from 'react'
import PropTypes from 'prop-types'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import { Scrollbars } from 'react-custom-scrollbars'

// needed for console warnings
import Modal from 'react-modal'
Modal.setAppElement(document.getElementById('app'))

const TemplatesSlideInPanel = ({ isOpen, children, header, footer, from }) => {
    return (
        <SlidingPane
            className='slide-up-panel'
            overlayClassName='some-custom-overlay-class'
            isOpen={isOpen}
            from={from}
            width={'100%'}
            >
            <div className='o-television'>
                <div className='o-television__bar'>
                    {header}
                </div>
                <Scrollbars className='o-television__display' autoHide>
                    <div className='o-television__display__wrapper'>
                        {children}
                    </div>
                </Scrollbars>
                <div className='o-television__remote-control'>
                    {footer}
                </div>
            </div>

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
    footer: PropTypes.node.isRequired,
    from: PropTypes.string.isRequired,
}

export default TemplatesSlideInPanel
