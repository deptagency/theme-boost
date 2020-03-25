import React from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const Button = ({ type, className, children, onClick }) => {
    return (
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    type: 'button',
    className: ''
}

export default ComponentInjector.return('Button', Button)
