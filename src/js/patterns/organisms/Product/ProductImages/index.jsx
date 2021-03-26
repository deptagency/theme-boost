import React from 'react'
import PropTypes from 'prop-types'
import Slider from '../../../molecules/Slider'

import RemoteImage from '@frontastic/catwalk/src/js/remoteImage'

const ProductImages = ({ images }) => {
    return (
        <Slider options={{ items: 1, loop: false, responsive: {} }}>
            {images.map((image, i) => {
                return (
                    <div className='relative bg-white' key={i}>
                        <RemoteImage
                            alt=''
                            url={image}
                            cropRatio='4:3'
                            itemProp='image'
                            options={{ crop: 'pad', background: 'transparent' }}
                        />
                    </div>
                )
            })}
        </Slider>
    )
}

ProductImages.propTypes = {
    images: PropTypes.array.isRequired,
}

export default ProductImages
