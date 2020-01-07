import React, { Fragment, Component } from 'react'
import { FormattedMessage } from 'react-intl'

import Addressblock from '../../organisms/blocks/addressblock'
import OrganismsPaymentListing from '../../organisms/listings/payment-listing'
import Button from '../../atoms/buttons/button'
import OrganismsHeaderContext from '../../organisms/base/header-context'
import OrganismsFooter from '../../organisms/base/foot'

import ComponentInjector from 'frontastic-catwalk/src/js/app/injector'

class OrderBilling extends Component {
    render () {
        return (
            <Fragment>
                <HeaderContext />
                <div className='o-container-small o-prevent-space o-distance'>
                    <Addressblock editable='true' />
                    <div className='o-television__display__boundless o-distance'>
                        <span className='c-divider c-divider--break' />
                    </div>
                    <div className='o-distance'>
                        <h2 className='c-title-level-3'>
                            <FormattedMessage id='order.selectMethod' />
                        </h2>
                        <div className='o-distance-m'>
                            <PaymentListing />
                        </div>
                    </div>
                    <Button type='primary' size='boss' className='o-distance'>
                        <FormattedMessage id='account.more' />
                    </Button>
                </div>
                <div className='o-prevent-space'>
                    <OrganismsFooter />
                </div>
            </Fragment>
        )
    }
}

OrderBilling.propTypes = {
}

OrderBilling.defaultProps = {
}

export default ComponentInjector.return('OrderBilling', OrderBilling)
