import React, { Component } from 'react'

import MoleculesChip from 'js/patterns/molecules/chips/chip'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsPaymentListing extends Component {
    render () {
        return (
            <div className='o-grid o-grid--half'>
                <MoleculesChip component='button' title='PayPal' />
                <MoleculesChip component='button' title='SEPA-Lastschrift' />
                <MoleculesChip component='button' title='Kreditkarte' active='true' />
                <MoleculesChip component='button' title='Rechnung' />
            </div>
        )
    }
}

OrganismsPaymentListing.propTypes = {}

OrganismsPaymentListing.defaultProps = {}

export default ComponentInjector.return('OrganismsPaymentListing', OrganismsPaymentListing)
