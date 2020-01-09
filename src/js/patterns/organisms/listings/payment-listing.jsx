import React, { Component } from 'react'

import Chip from '../../atoms/chips/chip'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class PaymentListing extends Component {
    render () {
        return (
            <div className='o-grid o-grid--half'>
                <Chip component='button' title='PayPal' />
                <Chip component='button' title='SEPA-Lastschrift' />
                <Chip component='button' title='Kreditkarte' active='true' />
                <Chip component='button' title='Rechnung' />
            </div>
        )
    }
}

PaymentListing.propTypes = {}

PaymentListing.defaultProps = {}

export default ComponentInjector.return('PaymentListing', PaymentListing)
