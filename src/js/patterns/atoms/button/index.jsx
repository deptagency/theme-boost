import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'

const Button = ({
    type = 'button',
    variant = '',
    disabled = false,
    children,
    onClick = () => {},
}) => {
    return (
        <button type={type} className={variant} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default ComponentInjector.return('Button', Button)
