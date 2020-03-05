import React, { Component } from 'react'
import PropTypes from 'prop-types'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import { take } from 'lodash'
import ProductSlider from '../../../patterns/organisms/slider'

class ProductSliderTastic extends Component {
    render () {
        const { title, description, stream, productCount } = this.props.data

        if (!stream) {
            return null
        }

        return (
            <ProductSlider
                title={title}
                description={description}
                products={take(stream.items, productCount)}
            />
        )
    }
}

ProductSliderTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

ProductSliderTastic.defaultProps = {}

export default tastify()(ProductSliderTastic)
