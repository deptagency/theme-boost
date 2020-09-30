import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'Molecules/Slider'

import RemoteImage from '@frontastic/catwalk/src/js/remoteImage'

const ProductImages = ({ images }) => {
    return (
        <div className='mt-4 md:mt-6 bg-white rounded'>
            <Slider options={{ items: 1, loop: true, responsive: {} }}>
                {images.map((image, i) => {
                    return (
                        <RemoteImage
                            key={i}
                            alt=''
                            url={image}
                            cropRatio='4:3'
                            itemProp='image'
                            options={{ crop: 'pad', background: 'transparent' }} />
                    )
                })}
            </Slider>
        </div>
    )
}

ProductImages.propTypes = {
    images: PropTypes.array.isRequired,
}

export default ProductImages
