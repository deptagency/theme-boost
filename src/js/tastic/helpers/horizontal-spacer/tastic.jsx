import React from 'react'
import PropTypes from 'prop-types'

const SIZE_MAP = {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
}

export default function HorizontalSpacerTastic ({ tastic }) {
    const size = tastic.schema.get('size') || 'xl'
    const spaceInPx = tastic.schema.get('spaceInPx') || SIZE_MAP[size]
    return (
        <div
            className='horisontal-spacer-tastic'
            style={{
            width: '100%',
            height: `${spaceInPx}px`,
        }} />
    )
}

HorizontalSpacerTastic.propTypes = {
    tastic: PropTypes.object.isRequired,
}
