import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Price from 'Atoms/price'
import Button from 'Atoms/button'

const Summary = ({ sum, subtotal = '' }) => {
    return (
        <section className='p-4'>
            <div className='mb-4 grid grid-cols-2 col-gap-6 row-gap-2'>
                {subtotal ?
                    <Fragment>
                        <p className='text-md text-gray-800 leading-normal'>
                            <FormattedMessage id='cart.subtotal' />
                        </p>
                        <p className='text-md text-right text-gray-800 leading-normal'>
                            <Price value={sum} />
                        </p>
                    </Fragment>
                : null}
                <p className='text-md text-gray-800 leading-normal'>
                    <FormattedMessage id='cart.shippingCosts' />
                </p>
                <p className='text-md text-right text-gray-800 uppercase leading-normal'>
                    <FormattedMessage id='cart.gratis' />
                </p>

                <span className='mb-3 block w-full h-px bg-gray-300 col-start-auto col-end-span-2' />

                <p className='mb-1 text-md text-gray-800 leading-none font-bold'>
                    <FormattedMessage id='cart.totalAmount' />
                </p>

                <p className='text-md text-right text-gray-800 leading-none font-bold'>
                    <Price value={sum} />
                </p>
            </div>

            <Button variant='btn btn-indigo w-full'>
                <FormattedMessage id='cart.checkout' />
            </Button>

            <p className='mt-4 text-xs text-gray-800 text-center'>
                <FormattedMessage id='cart.enterVouchers' />
            </p>
        </section>
    )
}

Summary.propTypes = {
    subtotal: PropTypes.string,
    sum: PropTypes.number.isRequired,
}

export default ComponentInjector.return('Summary', Summary)
