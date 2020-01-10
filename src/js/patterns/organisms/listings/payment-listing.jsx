import React, { Component } from 'react'

import Chip from '../../atoms/chips/chip'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class PaymentListing extends Component {
    render () {
        return (
            <div className='o-grid o-grid--half o-grid--inline'>
                <Chip component='button' title='PayPal' className='c-chip--squared' />
                <Chip component='button' title='SEPA' className='c-chip--squared' />
                <Chip component='button' title='Creditcard' active='true' className='c-chip--squared o-distance-m' />
                <Chip component='button' title='Invoice' className='c-chip--squared o-distance-m' />
            </div>
        )
    }
}

PaymentListing.propTypes = {}

PaymentListing.defaultProps = {}

export default ComponentInjector.return('PaymentListing', PaymentListing)
