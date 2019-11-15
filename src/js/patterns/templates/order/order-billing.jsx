import React, { Component } from 'react'

import OrganismsAddressblock from '../../organisms/blocks/addressblock'
import OrganismsPaymentListing from '../../organisms/listings/payment-listing'
import MoleculesButton from '../../molecules/buttons/button'
import OrganismsHeaderContext from '../../organisms/base/header-context'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesOrderBilling extends Component {
    render () {
        return (
            <div className='o-television'>
                <OrganismsHeaderContext className='o-television__bar' />
                <div className='o-television__display'>
                    <div className='o-container-small'>
                        <OrganismsAddressblock editable='true' />
                        <div className='o-television__display__boundless o-distance'>
                            <span className='c-divider c-divider--break' />
                        </div>
                        <div className='o-distance'>
                            <h2 className='c-title-level-3'>Zahlungsmethode wählen</h2>
                            <div className='o-distance-m'>
                                <OrganismsPaymentListing />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='o-television__remote-control'>
                    <div className='o-container-small'>
                        <MoleculesButton type='primary' size='boss' className='o-distance'>Weiter</MoleculesButton>
                    </div>
                </div>
            </div>
        )
    }
}

TemplatesOrderBilling.propTypes = {
}

TemplatesOrderBilling.defaultProps = {
}

export default ComponentInjector.return('TemplatesOrderBilling', TemplatesOrderBilling)
