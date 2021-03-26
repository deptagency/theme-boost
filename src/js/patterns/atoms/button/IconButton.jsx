import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const IconButton = ({ icon, name, onClick = () => {}, children, variant = 'text-2xl' }) => {
    return (
        <button
            aria-label={name}
            onClick={onClick}
            className={classnames({
                [variant]: true,
            })}
            >
            {icon && icon}
            {children && <p>{children}</p>}
        </button>
    )
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.any,
    variant: PropTypes.string,
}

export default IconButton
