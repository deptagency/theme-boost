import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const IconButton = ({
    icon,
    onClick = () => {},
    children,
    variant = 'text-2xl',
}) => {
    return (
        <button
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
    onClick: PropTypes.func,
    children: PropTypes.any,
    variant: PropTypes.string,
}

export default IconButton
