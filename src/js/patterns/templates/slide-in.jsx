import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import OrganismsHeaderSlideIn from '../organisms/base/header-slide-in'
import { Scrollbars } from 'react-custom-scrollbars'

const openStyles = {
    // component specific
    position: 'absolute',
    top: '0',
    background: 'white',

    // transitions
    opacity: '1',
    zIndex: '1',
    transform: `translateY(0%)`,
    transition: `transform 0.4s ease-out, 
                opacity 0s ease-in-out,
                z-index 0s ease-in-out`,
}
const closedStyles = {
    // component specific
    position: 'absolute',

    // transitions
    opacity: '0',
    zIndex: '-1',
    transform: `translateY(150%)`,
    transition: `transform 0.5s ease-out, 
                opacity 2s ease-in-out,
                z-index 2s ease-in-out`,
}

const scrollToTop = () => {
    const page = window ? window.document : document
    if (page.documentElement.scrollTop > 0) { page.documentElement.scrollTop = 0 }
}

const TemplatesSlideIn = ({ isOpen, children, header }) => {
    useEffect(() => {
        !isOpen && scrollToTop()
    }, [isOpen])

    return (
        <div
            className='c-slide-in'
            style={isOpen ? openStyles : closedStyles}
            >
            {header}
            {/* {children} */}
            <Scrollbars autoHide style={{
                height: 'calc(100% - 48px)',
                // height: '100%',
                minHeight: '500px',
            }}>
                {children}
            </Scrollbars>
        </div>
    )
}

TemplatesSlideIn.defaultProps = {
    isOpen: false,
}

TemplatesSlideIn.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
}

export default TemplatesSlideIn
