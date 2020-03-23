import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const IconButton = ({
    icon,
    onClick = () => {},
    children,
    variant = '',
}) => {
    return (
        <button
            onClick={onClick}
            className={classnames({
                'text-2xl': true,
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
    onClick: PropTypes.func,
    children: PropTypes.any,
    variant: PropTypes.string,
}

export default IconButton
