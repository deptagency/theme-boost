import React from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

function Sticker ({ children, className }) {
    return <span className={`bg-background-primary text-xs text-red-600 rounded p-1 ${className}`}>{children}</span>
}

Sticker.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    className: PropTypes.string,
}

Sticker.defaultProps = {
    children: '20%',
}

export default ComponentInjector.return('Sticker', Sticker)
