import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Summary from './Summary'
import MiniSummary from './MiniSummary'
import Payments from './Payments'
import ProductList from './ProductList'
import MarginBreakout from 'Molecules/Layout/MarginBreakout'

const FullCart = ({ items, sum }) => {
    return (
        <MarginBreakout>
            <div className='my-4 max-w-960px md:px-4 mx-auto md:grid md:gap-4 md:grid-cols-1-340 md:grid-rows-1'>
                <div className='md:hidden border-b-4 border-gray-100'>
                    <MiniSummary sum={sum} />
                </div>

                <div className='md:shadow-md md:rounded'>
                    <div className='p-4 border-b-4 border-gray-100'>
                        <h1 className='hidden md:block md:px-2 md:pt-1 md:pb-5 text-2xl text-gray-800 font-bold leading-none'>
                            <FormattedMessage id='cart.myCart' />
                        </h1>

                        <ProductList items={items} />
                    </div>

                    <div className='px-4 py-5 border-b-4 border-gray-100 md:border-0'>
                        <h2 className='text-lg text-gray-800 font-bold leading-none'>
                            <FormattedMessage id='cart.paymentMethods' />
                        </h2>

                        <div className='mt-4'>
                            <Payments />
                        </div>
                    </div>
                </div>

                <div className='border-b-4 border-gray-100 md:border-0 self-baseline md:sticky md:top-0 md:shadow-md md:rounded'>
                    <Summary sum={sum} />
                </div>
            </div>
        </MarginBreakout>
    )
}

FullCart.propTypes = {
    items: PropTypes.array.isRequired,
    sum: PropTypes.number.isRequired,
}

export default FullCart
