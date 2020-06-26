import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'

const Alert = ({
    type = 'alert',
    variant = '',
    children,
}) => {
    return (
        <div type={type} className={variant}>
            {children}
        </div>
    )
}

Alert.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default ComponentInjector.return('Alert', Alert)
