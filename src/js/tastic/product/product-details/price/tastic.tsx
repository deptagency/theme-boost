import React from 'react'
import { useSelector } from 'react-redux'

import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import Price from '../../../../patterns/atoms/price'

import { Variant } from '@frontastic/common/src/js/types/product'

function ProductPrice(props) {
    const { variant } = useSelector((state: { variant: Variant }) => productConnector(state, props))
    if (!variant) return null;
    return (
        <Price
            className='text-xl text-gray-700 antialiased inline-block mb-4'
            value={variant.discountedPrice || variant.price}
            currency={variant.currency}
        />
    )
}

export default tastify()(ProductPrice)
