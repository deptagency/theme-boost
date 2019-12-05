import React from 'react'
import PropTypes from 'prop-types'

export function StoreFeature({ icon, children }) {
    return (
        <div className='c-store-feature'>
            <div className='c-store-feature__icon'>{icon}</div>
            <p>{children}</p>
        </div>
    )
}

StoreFeature.propTypes = {
    icon: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
}

StoreFeature.defaultProps = {}
