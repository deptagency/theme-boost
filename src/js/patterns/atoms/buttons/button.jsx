import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'

const Button = ({ 
    type = 'button', 
    variant = '', 
    children, 
    onClick = () => {},
}) => {
    return (
        <button type={type} className={variant} onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

export default ComponentInjector.return('Button', Button)
