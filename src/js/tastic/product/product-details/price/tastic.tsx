import React from 'react'
import { useSelector } from 'react-redux'

import productConnector from '@frontastic/catwalk/src/js/tastic/product/connector'
import tastify from '@frontastic/catwalk/src/js/helper/tastify'

import Price from '../../../../patterns/atoms/price'

function ProductPrice(props) {
    const { variant } = useSelector((state) => productConnector(state, props))
    return <Price className='text-xl inline-block mb-3' value={variant.price} currency={variant.currency} />
}

export default tastify()(ProductPrice)
