import React from 'react'
import { injectIntl, intlShape } from 'react-intl'

import AddressForm from './Forms/Address'
import BillingForm from './Forms/Billing'
import ShippingForm from './Forms/Shipping'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

const ShippingPanel = (intl) => {
    const buttonLabel = 'Next: Payment' //intl.formatMessage({id: 'checkout.nextPayment'});

    return (
        <div className='flex items-center p-4'>
            <StickyRightColumn
                variant='my-4 max-w-960px md:px-4 mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded md:px-6 md:pt-5 md:pb-6'>
                        <ShippingForm />

                        <AddressForm />
                    </div>
                }

                rightColumn={
                    <div className='md:shadow-md md:rounded md:p-4'>
                        <Summary sum={10} label={buttonLabel} showVouchers={false} onClick={() => {}}/>
                    </div>
                }
            />
        </div>
    )
}

ShippingPanel.propTypes = {
    intl: intlShape.isRequired,
}

export default injectIntl(ShippingPanel);