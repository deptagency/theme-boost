import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import app from 'frontastic-catwalk/src/js/app/app'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import { ReactComponent as CartBin } from 'Icons/cart-bin.svg'
import Price from 'Atoms/price'

const Product = ({ itemId, image, name, designer, count, price, color, size }) => {
    const productCounter = Array.from(Array(10).keys())

    return (
        <div className='grid gap-6 grid-cols-120-3xfr grid-rows-auto-1fr-auto'>
            <div className='col-start-1 row-start-1 row-end-span-3'>
                <img src={image} alt='' />
            </div>

            <div className='grid row-start-1 col-start-2 col-end-span-3 grid-cols-1-auto items-start'>
                <div>
                    <div className='text-4xl leading-tight font-bold'>{name}</div>
                    <div className='text-3xl text-gray-600'>{designer}</div>
                </div>
                <button className='c-button-single-icon c-button-single-icon--primary' onClick={() => {
                    app.getLoader('cart').removeLineItem({ lineItemId: itemId })
                }}>
                    <CartBin />
                </button>
            </div>

            <div className='row-start-2 col-start-2 col-end-span-3'>
                <dl className='grid grid-cols-2-max-content col-gap-8 row-gap-6 items-start justify-start'>
                    <dt className='text-3xl text-gray-600'><FormattedMessage id='colorProduct' /></dt>
                    <dd className='text-3xl font-bold'>{color}</dd>
                    <dt className='text-3xl text-gray-600'><FormattedMessage id='sizeProduct' /></dt>
                    <dd className='text-3xl font-bold'>{size}</dd>
                </dl>

                <select
                    className='mt-8'
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
                </select>
            </div>
            <div className='row-start-3 grid-col-start-2 col-end-span-3 text-right'>
                <Price value={price} normal />
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
