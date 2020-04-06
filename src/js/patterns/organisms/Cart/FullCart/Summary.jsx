import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Price from 'Atoms/price'
import Button from 'Atoms/button'

const Summary = ({ sum, subtotal }) => {
    subtotal = 10

    return (
        <section>
            <div className='mb-4 grid grid-cols-2-auto col-gap-6 row-gap-2'>
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
                <span className='block w-full h-px bg-gray-300 col-start-auto col-end-span-2' />
                <div>
                    <p className='mb-1 text-md text-gray-800 leading-normal font-bold'>
                        <FormattedMessage id='cart.totalAmount' />
                    </p>
                    <p className='text-sm text-gray-500 leading-tight'>
                        <FormattedMessage id='cart.inclVat' />
                    </p>
                </div>
                <p className='text-md text-right text-gray-800 leading-normal font-bold'>
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

Summary.defaultProps = {
    subtotal: '',
}

export default ComponentInjector.return('Summary', Summary)
