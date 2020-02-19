import React from 'react'
import PropTypes from 'prop-types'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import { Scrollbars } from 'react-custom-scrollbars'

// needed for console warnings
import Modal from 'react-modal'
Modal.setAppElement(document.getElementById('app'))

const Clean = ({ isOpen, children, header, footer, from, overlayClassName }) => {
    return (
        <SlidingPane
            className='o-slide-up-panel'
            overlayClassName={overlayClassName}
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
                {footer}
            </div>

        </SlidingPane>
    )
}

Clean.defaultProps = {
    isOpen: false,
    from: 'bottom',
    overlayClassName: 'some-custom-overlay-class',
}

Clean.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node,
    header: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired,
    from: PropTypes.oneOf(['left', 'right', 'bottom']),
    overlayClassName: PropTypes.string,
}

export default Clean
