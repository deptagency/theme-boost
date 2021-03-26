import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Price from '../../../atoms/price'

const Product = ({ image, name, designer, count, price, discountedPrice, color, size }) => {
    return (
        <div className='grid grid-cols-120-1xfr col-gap-4'>
            <div>
                <img src={image} alt='' />
            </div>

            <div>
                <div className='text-md font-bold leading-tight'>{name}</div>
                {designer && <div className='text-sm text-neutral-600 leading-tight'>{designer}</div>}
                {color && (
                    <div className='mt-3 text-sm text-neutral-600 leading-tight'>
                        <FormattedMessage id='colorProduct' /> {color}
                    </div>
                )}
                {size && (
                    <div className='text-sm text-neutral-600 leading-tight'>
                        <FormattedMessage id='sizeProduct' /> {size}
                    </div>
                )}

                <div className='text-sm text-neutral-600 leading-tight'>
                    <FormattedMessage id='quantityProduct' /> {count}
                </div>

                <div className='mt-3'>
                    <Price
                        variant='text-sm text-neutral-700 font-bold leading-tight'
                        value={discountedPrice || price}
                    />
                </div>
            </div>
        </div>
    )
}

Product.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    designer: PropTypes.string,
    price: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    count: PropTypes.number.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
}

export default Product
