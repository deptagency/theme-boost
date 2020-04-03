import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

import Price from 'Atoms/price'

const Summary = ({ sum, subtotal }) => {
    return (
        <>
            <div className='grid grid-cols-2-auto col-gap-6 row-gap-6'>
                {subtotal ?
                    <Fragment>
                        <div>
                            <p className='text-3xl font-bold'>
                                <FormattedMessage id='cart.subtotal' />
                            </p>
                        </div>
                        <div className='text-right'>
                            <p className='text-3xl font-bold'>
                                <Price value={sum} />
                            </p>
                        </div>
                    </Fragment>
                : null}
                <p className='text-3xl'>
                    <FormattedMessage id='cart.shippingCosts' />
                </p>
                <p className='text-right text-3xl'>
                    <FormattedMessage id='cart.gratis' />
                </p>
                <span className='block w-full h-px bg-gray-400 col-start-auto col-end-span-2' />
                <div>
                    <p className='font-bold'>
                        <FormattedMessage id='cart.totalAmount' />
                    </p>
                    <p className='text-3xl text-gray-600'>
                        <FormattedMessage id='cart.inclVat' />
                    </p>
                </div>
                <div className='text-right'>
                    <p className='text-4xl font-bold'>
                        <Price value={sum} />
                    </p>
                </div>
            </div>
        </>
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
