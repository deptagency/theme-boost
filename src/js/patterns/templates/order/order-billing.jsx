import React, { Fragment, Component } from 'react'

import OrganismsAddressblock from '../../organisms/blocks/addressblock'
import OrganismsPaymentListing from '../../organisms/listings/payment-listing'
import Button from '../../atoms/buttons/button'
import OrganismsHeaderContext from '../../organisms/base/header-context'
import OrganismsFooter from 'js/patterns/organisms/base/foot'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class TemplatesOrderBilling extends Component {
    render () {
        return (
            <Fragment>
                <OrganismsHeaderContext />
                <div className='o-container-small o-prevent-space o-distance'>
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
                    <Button type='primary' size='boss' className='o-distance'>Weiter</Button>
                </div>
                <div className='o-prevent-space'>
                    <OrganismsFooter />
                </div>
            </Fragment>
        )
    }
}

TemplatesOrderBilling.propTypes = {
}

TemplatesOrderBilling.defaultProps = {
}

export default ComponentInjector.return('TemplatesOrderBilling', TemplatesOrderBilling)
