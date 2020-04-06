import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Price from 'Atoms/price'
import Button from 'Atoms/button'
import Summary from './Summary'
import Payments from './Payments'
import ProductList from './ProductList'

const FullCart = ({ items, sum }) => {
    return (
        <div className='mt-4 md:grid md:gap-4 md:grid-cols-1-340'>
            <div className='md:hidden p-4 grid grid-cols-2 grid-rows-2'>
                <div className=''>
                    <div className='text-md text-gray-800 font-bold leading-tight'>
                        <FormattedMessage id='cart.myCart' />
                    </div>
                </div>

                <Price variant='text-md text-right sm:text-left text-gray-800 leading-normal' value={sum} />

                <div className='col-start-1 col-end-3'>
                    <Button variant='btn btn-indigo w-full'>
                        <FormattedMessage id='cart.checkout' />
                    </Button>
                </div>
            </div>

            <div className='w-full h-1 bg-gray-200 -mx-6 md:hidden'></div>

            <div className='px-4'>
                <h1 className='hidden md:block text-2xl text-gray-800 font-bold leading-none'>
                    <FormattedMessage id='cart.myCart' />
                </h1>

                <ProductList items={items} />
            </div>

            <div className='w-full h-1 bg-gray-200 -mx-6 md:hidden'></div>

            <div className='self-baseline md:sticky md:top-3 md:mt-0'>
                <div className='p-4 md:shadow-md md:rounded'>
                    <Summary sum={sum} />
                </div>
            </div>

            <div className='w-full h-1 bg-gray-200 -mx-6 md:hidden'></div>

            <section className='p-4'>
                <h2 className='text-2xl text-gray-800 font-bold leading-none'>
                    <FormattedMessage id='cart.paymentMethods' />
                </h2>

                <div className='mt-4'>
                    <Payments />
                </div>
            </section>            

            <div className='w-full h-1 bg-gray-200 -mx-6 md:hidden'></div>
        </div>
    )
}

FullCart.propTypes = {
    items: PropTypes.array.isRequired,
    sum: PropTypes.number.isRequired,
}

export default FullCart
