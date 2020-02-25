import React from 'react'
import PropTypes from 'prop-types'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

const ProductImage = ({ imageUrl, imageClassName = '', imageStyle = {}}) => {
    return (
        <div
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                ...imageStyle
            }}
            className={imageClassName}
        />
    )
}

ProductImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
}

ProductImage.defaultProps = {
}

export default ComponentInjector.return('Themes.Frontastic.Boost.ProductImage', ProductImage)
