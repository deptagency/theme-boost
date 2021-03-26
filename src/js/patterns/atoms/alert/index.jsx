import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'

const Alert = ({ type = 'alert', className = '', children }) => {
    return (
        <div type={type} className={className}>
            {children}
        </div>
    )
}

Alert.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default ComponentInjector.return('Alert', Alert)
