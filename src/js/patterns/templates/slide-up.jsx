import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import { Scrollbars } from 'react-custom-scrollbars'

const TemplatesSlideUp = ({ isOpen, children, header }) => {
    return (
        <SlidingPane
            className='slide-up-panel'
            overlayClassName='some-custom-overlay-class'
            isOpen={isOpen}
            from={'bottom'}
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

/* .some-custom-class {
    margin: 0;
    height: 100%;
} */

// ReactSlidingPane.propTypes = {
//     isOpen: PropTypes.bool.isRequired,
//     title: PropTypes.any,
//     subtitle: PropTypes.any,
//     onRequestClose: PropTypes.func,
//     onAfterOpen: PropTypes.func,
//     children: PropTypes.any.isRequired,
//     className: PropTypes.string,
//     overlayClassName: PropTypes.string,
//     from: PropTypes.oneOf(['left', 'right', 'bottom']),
//     width: PropTypes.string,
//     closeIcon: PropTypes.any
// };

TemplatesSlideUp.defaultProps = {
    isOpen: false,
}

TemplatesSlideUp.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default TemplatesSlideUp
