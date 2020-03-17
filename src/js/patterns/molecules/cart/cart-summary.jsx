import React from 'react'
import PropTypes from 'prop-types'

import Summary from '../../organisms/blocks/summary'
import Button from '../../atoms/buttons/button'
import { FormattedMessage } from 'react-intl'

const CartSummary = ({ sum, outerClassName }) => {
    return (
        <div className={`${outerClassName}`}>
            <section className='w-full max-w-1120px'>
                <h2 className='leading-tight md:text-5xl'><FormattedMessage id='cart.totalSum' /></h2>
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
    )
}

CartSummary.propTypes = {
    sum: PropTypes.number.isRequired,
    outerClassName: PropTypes.string.isRequired,
}

export default CartSummary
