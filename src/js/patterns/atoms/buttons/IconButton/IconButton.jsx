import React from 'react'
import PropTypes from 'prop-types'

export function IconButton ({ icon, onClick, className, children }) {
    return (
        <button onClick={onClick} className={`${className ? `${className} ` : ''}c-icon-button`}>
            {icon && icon}
            {children && <span className='c-icon-button__label'>{children}</span>}
        </button>
    )
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    children: PropTypes.any,
}
