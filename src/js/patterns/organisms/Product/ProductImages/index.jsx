import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'Molecules/Slider'

const ProductImages = ({ images }) => {
    return (
        <div className='mt-4 md:mt-6 bg-white rounded'>
            <Slider options={{ items: 1, loop: true, responsive: {} }}>
                {images.map((image, i) => {
                    return (
                        <div
                            key={i}
                            className='bg-white rounded'
                            style={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                width: '100%',
                                minWidth: '288px',
                                minHeight: '23.74rem',
                            }}
                        />
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
