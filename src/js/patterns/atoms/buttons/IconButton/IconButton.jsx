import React from 'react'
import PropTypes from 'prop-types'

export function IconButton ({ icon, onClick, className, children }) {
    return (
        <button onClick={onClick} className='text-2xl'>
            {icon && icon}
            {children && <p>{children}</p>}
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
