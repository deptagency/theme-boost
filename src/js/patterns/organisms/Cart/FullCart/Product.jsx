import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import app from 'frontastic-catwalk/src/js/app/app'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Price from 'Atoms/price'
import Select from 'Atoms/select'
import { ReactComponent as CartBin } from 'Icons/cart-bin.svg'

const Product = ({ itemId, image, name, designer, count, price, color, size }) => {
    /*const productCounter = Array.from(Array(10).keys())

    <select
        className='mt-3'
        onChange={(event) => {
            app.getLoader('cart').updateLineItem({
                lineItemId: itemId,
                count: event.target.value,
            })
        }}
        value={count} >
        {productCounter.map((i) => {
            const count = i + 1
            return <option key={count} value={count}>{count}</option>
        })}
    </select>*/

    return (
        <div className='grid grid-cols-120-2xfr grid-rows-auto-1fr-auto col-gap-4 row-gap-2'>
            <div>
                <img src={image} alt='' />
            </div>

            <div className=''>
                <div className='text-md font-bold leading-tight'>{name}</div>
                <div className='text-sm text-gray-600 leading-tight'>{designer}</div>
                <div className='text-sm text-gray-600 leading-tight'>
                    <FormattedMessage id='colorProduct' /> {color}
                </div>
                <div className='text-sm text-gray-600 leading-tight'>
                    <FormattedMessage id='sizeProduct' /> {size}
                </div>                

                <div className='block'>
                    <Select
                        values={variants}
                        formatLabel={(option) => { return option.attributes.color.label }}
                        onSelect={(i) => { return setSelectedVariantIndex(i) }}
                    />
                </div>

                <div className='mt-3'>
                    <Price variant='text-sm text-gray-700 font-bold leading-tight' value={price} />
                </div>
            </div>

            <div>
                <button className='flex items-center justify-center'
                    onClick={() => {
                    app.getLoader('cart').removeLineItem({ lineItemId: itemId })
                }}>
                    <CartBin className='inline-block' />

                    <div className='ml-2 text-sm text-gray-800 leading-tight'>
                        <FormattedMessage id='cart.remove' />
                    </div>
                </button>
            </div>
        </div>
    )
}

Product.propTypes = {
    itemId: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    designer: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
}

Product.defaultProps = {
}

export default ComponentInjector.return('Product', Product)
