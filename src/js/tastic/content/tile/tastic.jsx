import React from 'react'
import PropTypes from 'prop-types'
import Tile from '../../../patterns/molecules/tiles/tile'

const TileTastic = ({ data }) => {
    return (
        <Tile {... data} />
    )
}

TileTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default TileTastic
