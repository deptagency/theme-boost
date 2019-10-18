import React, { Component } from 'react'

import MoleculesChip from 'js/patterns/molecules/chips/chip'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrganismsPaymentListing extends Component {
    render () {
        return (
            <div className='o-grid o-grid--half'>
                <MoleculesChip title='PayPal' />
                <MoleculesChip title='SEPA-Lastschrift' />
                <MoleculesChip title='Kreditkarte' active='true' />
                <MoleculesChip title='Rechnung' />
            </div>
        )
    }
}

OrganismsPaymentListing.propTypes = {}

OrganismsPaymentListing.defaultProps = {}

export default ComponentInjector.return('OrganismsPaymentListing', OrganismsPaymentListing)
