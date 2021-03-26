import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'

const SIZE_MAP = {
    xxs: '4',
    xs: '8',
    sm: '12',
    md: '16',
    lg: '20',
    xl: '24',
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
            }}
        />
    )
}

HorizontalSpacerTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default tastify({ translate: true })(HorizontalSpacerTastic)
