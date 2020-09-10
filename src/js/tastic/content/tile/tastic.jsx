import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import Tile from 'Molecules/Tile'

const TileTastic = ({ data }) => {
    return (
        <Tile
            image={data.image}
            topic={data.topic}
            title={data.title}
            verticalPosition={data.verticalPosition}
            horizontalPosition={data.horizontalPosition}
            buttonLabel={data.buttonLabel}
            reference={data.reference}
            isClickable={data.isClickable}
        />
    )
}

TileTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default tastify({ translate: true })(TileTastic)
