import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Button from 'Atoms/button'
import Summary from './Summary'
import Payments from './Payments'
import ProductList from './ProductList'

const FullCart = ({ items, sum }) => {
    return (
        <div className='mt-6 md:grid md:gap-10 md:grid-cols-1-340'>
            <div>
                <section className='md:block md:p-8 md:border-2 md:border-solid md:border-gray-200 md:rounded-lg'>
                    <h1 className='leading-tight md:text-5xl'>
                        <FormattedMessage id='cart.myCart' />
                    </h1>
                    <div>
                        <ProductList items={items} />
                    </div>
                </section>

                <div className='mt-12 -mx-6 md:hidden'>
                    <div className='w-full h-2 bg-gray-200' />
                </div>

                <section className='w-full max-w-1120px mt-12 md:block md:p-8 md:border-2 md:border-solid md:border-gray-200 md:rounded-lg'>
                    <h2 className='leading-tight md:text-5xl'>
                        <FormattedMessage id='cart.paymentMethods' />
                    </h2>
                    <Payments image={''} />
                </section>

                <div className='mt-12 -mx-6 md:hidden'>
                    <div className='w-full h-2 bg-gray-200' />
                </div>
            </div>

            <div className='mt-3 self-baseline md:sticky md:top-3 md:mt-0'>
                <div className='block p-8 bg-gray-200 rounded-lg leading-none'>
                    <section className='w-full max-w-1120px'>
                        <h2 className='leading-tight md:text-5xl'>
                            <FormattedMessage id='cart.totalSum' />
                        </h2>
                        <div className='mt-6'>
                            <Summary sum={sum} />

                            <p className='mt-8 text-3xl text-gray-600'>
                                <FormattedMessage id='cart.enterVouchers' />
                            </p>
                        </div>
                    </section>

                    <div className='w-full max-w-1120px md:mt-16'>
                        <Button size='boss' type='primary'>
                            <FormattedMessage id='cart.checkout' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

FullCart.propTypes = {
    items: PropTypes.array.isRequired,
    sum: PropTypes.number.isRequired,
}

export default FullCart
