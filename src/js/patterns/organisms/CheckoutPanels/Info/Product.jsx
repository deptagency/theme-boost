import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Price from 'Atoms/price'

const Product = ({ image, name, designer, count, price, color, size }) => {
    return (
        <div className='grid grid-cols-120-1xfr grid-rows-auto-1fr col-gap-4 row-gap-4'>
            <div>
                <img src={image} alt='' />
            </div>

            <div>
                <div className='text-md font-bold leading-tight'>{name}</div>
                {designer && <div className='text-sm text-gray-600 leading-tight'>{designer}</div>}
                {color && <div className='mt-3 text-sm text-gray-600 leading-tight'>
                    <FormattedMessage id='colorProduct' /> {color}
                </div>}
                {size && <div className='text-sm text-gray-600 leading-tight'>
                    <FormattedMessage id='sizeProduct' /> {size}
                </div>}

                <div className='text-sm text-gray-600 leading-tight'>
                    <FormattedMessage id='quantityProduct' /> {count}
                </div>

                <div className='mt-3'>
                    <Price variant='text-sm text-gray-700 font-bold leading-tight' value={price} />
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
    count: PropTypes.number.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
}

export default Product
