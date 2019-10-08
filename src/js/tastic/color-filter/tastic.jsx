import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MoleculesColorsFilter from '../../patterns/molecules/colorsfilter/colors-filter'

class ColorFilterTastic extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div className='display-grid grid-justify-items--center'>
                <dl className='o-detaillist'>
                    <dt className='t-text-quiet'>Farbe:</dt>
                    <dd className='u-text-strong'>Schwarz</dd>
                </dl>
                <MoleculesColorsFilter className='margin-bottom--8' colors={['#31333E', '#98E076', '#3A42F1', '#FFCE18']} />
            </div>
        )
    }
}

ColorFilterTastic.propTypes = {
    data: PropTypes.object.isRequired,
    tastic: PropTypes.object.isRequired,
}

ColorFilterTastic.defaultProps = {}

export default ColorFilterTastic
