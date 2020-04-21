import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'Molecules/Slider'

const ProductImages = ({ images }) => {
    return (
        <div className='max-h-736px mt-4 md:mt-6'>
            <Slider options={{ items: 1, loop: true, responsive: {} }}>
                {images.map((image, i) => {
                    return (
                        <div
                            className="product-image-wrapper"
                            key={i}
                        >
                            <img src={image} alt="Product Image" />
                        </div>
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
