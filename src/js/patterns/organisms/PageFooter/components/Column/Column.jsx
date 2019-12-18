import React from 'react'
import PropTypes from 'prop-types'

function Column ({ children, className = '', title = 'Title missing' }) {
    return (
        <div className={className}>
            <h2 className='u-text-m u-text-strong u-text-uppercase u-text-color-ghost'>{title}</h2>
            <div className='o-distance-s'>{children}</div>
        </div>
    )
}

Column.propTypes = {
    children: PropTypes.object,
    className: PropTypes.string,
    title: PropTypes.object,
}

export { Column }
