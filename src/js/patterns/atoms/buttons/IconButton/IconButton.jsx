import React from 'react'
import PropTypes from 'prop-types'

export function IconButton ({ icon, onClick, className, children }) {
    return (
        <button onClick={onClick} className={`${className ? `${className} ` : ''}c-link c-link--uniform`}>
            {icon && icon}
            {children && <p className='u-text-xxs'>{children}</p>}
        </button>
    )
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.any,
}

IconButton.defaultProps = {
    onClick: () => {},
}
