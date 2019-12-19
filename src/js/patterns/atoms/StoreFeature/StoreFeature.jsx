import React from 'react'
import PropTypes from 'prop-types'

export function StoreFeature ({ icon, children }) {
    return (
        <div className='c-box c-box--s u-background-color-ghost c-store-feature o-box-row__item'>
            <div className='o-block-short o-block-short--centered'>
                <div className='o-block-short__short-item'>{icon}</div>
                <p className='u-text-s u-text-color-900'>{children}</p>
            </div>
        </div>
    )
}

StoreFeature.propTypes = {
    icon: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
}

StoreFeature.defaultProps = {}
