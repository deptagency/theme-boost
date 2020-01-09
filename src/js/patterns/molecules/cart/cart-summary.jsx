import React from 'react'
import PropTypes from 'prop-types'

import Summary from '../../organisms/blocks/summary'
import Button from '../../atoms/buttons/button'
import { FormattedMessage } from 'react-intl'

const CartSummary = ({ sum, outerClassName }) => {
    return (
        <div className={`${outerClassName}`}>
            <section className='o-container'>
                <h2 className='c-title-area'><FormattedMessage id='cart.totalSum' /></h2>
                <div className='o-distance-s'>
                    <Summary sum={sum} />
                    <p className='o-distance-m u-text-s t-text-quiet'>
                        <FormattedMessage id='cart.enterVouchers' />
                    </p>
                </div>
            </section>
            <div className='o-container o-distance'>
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
