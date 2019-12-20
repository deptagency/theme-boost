import React from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const ProductImage = ({ imageUrl }) => {
    return (<img src={imageUrl} alt='' />)
}

ProductImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
}

ProductImage.defaultProps = {
}

export default ComponentInjector.return('Themes.Frontastic.Boost.ProductImage', ProductImage)
