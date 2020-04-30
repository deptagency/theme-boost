import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

import Checkbox from 'Atoms/checkbox'

import DeliveryForm from './Forms/Delivery'
import BillingForm from './Forms/Billing'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

const ShippingPanel = ({ goToNextPanel, intl, data }) => {
    const buttonLabel = intl.formatMessage({id: 'checkout.nextPayment'});
    const billingDetailsLabel = intl.formatMessage({id: 'checkout.billingDetailsLabel'})

    return (
        <div>
            <StickyRightColumn
                variant='my-4 max-w-960px md:px-4 mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded'>
                        <div className='px-4 py-6 md:px-6 border-t-4 md:border-t-0 border-gray-100'>
                            <DeliveryForm />

                            <div className='mt-4 p-4 bg-gray-200 rounded flex items-center text-gray-800'>
                                <Checkbox className='mr-2' label={billingDetailsLabel} onClick={() => {}} />
                            </div>
                        </div>

                        <div className='px-4 py-6 md:px-6 border-t-4 border-gray-100'>
                            <BillingForm />
                        </div>
                    </div>
                }

                rightColumn={
                    <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded border-t-4 md:border-t-0 border-gray-100'>
                        <Summary sum={data.sum} label={buttonLabel} disabled={false} showVouchers={false}
                            onClick={() => {
                                goToNextPanel()
                            }}
                        />
                    </div>
                }
            />
        </div>
    )
}

ShippingPanel.propTypes = {
    errorMessage: PropTypes.string,
    goToNextPanel: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
}

export default injectIntl(ShippingPanel);
