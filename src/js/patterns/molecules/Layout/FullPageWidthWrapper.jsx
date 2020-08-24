import React from 'react'
import PropTypes from 'prop-types'

export default function FullPageWidthWrapper ({ children, className = '' }) {
    return (
        <div
            className={className}
            style={{
                width: '100vw',
                position: 'relative',
                left: '50%',
                right: '50%',
                marginLeft: '-50vw',
                marginRight: '-50vw',
            }}
            >
            {children}
        </div>
    )
}
FullPageWidthWrapper.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
}
