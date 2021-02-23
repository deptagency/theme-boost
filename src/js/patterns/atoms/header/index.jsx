import React from 'react'
import PropTypes from 'prop-types'
import ComponentInjector from '@frontastic/catwalk/src/js/app/injector'

const Header = ({ title, className = '' }) => {
    return <h2 className={`text-2xl text-gray-900 font-bold antialiased ${className}`}>{title}</h2>
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default ComponentInjector.return('Header', Header)
