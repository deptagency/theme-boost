import React from 'react'
import PropTypes from 'prop-types'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import ProductSlider from 'Organisms/Slider'

function ProductSliderTastic ({ data: {
    title,
    description,
    stream,
    productCount,
},
}) {
    if (!stream) {
        return null
    }
    return (
        <ProductSlider
            title={title}
            description={description}
            products={stream.items.slice(0, productCount)}
        />
    )
}

ProductSliderTastic.propTypes = {
    data: PropTypes.object.isRequired,
}

export default tastify()(ProductSliderTastic)
