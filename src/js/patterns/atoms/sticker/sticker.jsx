import React, { Component } from 'react'
import PropTypes from 'prop-types';

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

function Sticker({children, className}) {
        return (
            <span className={`bg-white text-xs text-red-600 rounded p-1 ${className}`}>{children}</span>
        )
}

Sticker.propTypes = {
    text: PropTypes.string
}

Sticker.defaultProps = {
    text: '20%',
}

export default ComponentInjector.return('Sticker', Sticker)
