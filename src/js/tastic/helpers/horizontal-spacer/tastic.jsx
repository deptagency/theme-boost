import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'

const SIZE_MAP = {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
}

const HorizontalSpacerTastic = ({ data }) => {
    const size = data.size || 'xl'
    const spaceInPx = data.spaceInPx || SIZE_MAP[size]

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
    data: PropTypes.object.isRequired,
}

export default tastify({ translate: true })(HorizontalSpacerTastic)
