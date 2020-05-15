import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

import Delivery from './Info/Delivery'
import Billing from './Info/Billing'
import PaymentMethod from './Info/PaymentMethod'
import Products from './Info/Products'
import OrderButton from './Info/OrderButton'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

const OverviewPanel = ({ intl, data, goToPanelIndex, checkoutDetails }) => {
    const buttonLabel = intl.formatMessage({ id: 'checkout.placeOrder' })

    const placeOrderClicked = () => {
        // TODO implement API call
    }

    return (
        <div>
            <StickyRightColumn
                variant='md:my-4 md:px-4 max-w-960px mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded'>
                        <div className='sm:hidden px-4 py-3 md:px-6 border-b-4 border-gray-100 border-t-4 md:border-t-0'>
                            <OrderButton label={buttonLabel} onClick={placeOrderClicked} />
                        </div>
                        <div className='px-4 py-5 md:px-6 border-b-4 border-gray-100'>
                            <Products products={data.lineItems} />
                        </div>
                        <div className='px-4 py-5 md:px-6 border-b-4 border-gray-100'>
                            <Delivery delivery={checkoutDetails.delivery} onClick={() => { goToPanelIndex(0) }} />
                        </div>
                        <div className='px-4 py-5 md:px-6 border-b-4 border-gray-100'>
                            <Billing billing={checkoutDetails.isBillingSameAsDelivery ? checkoutDetails.delivery : checkoutDetails.billing} onClick={() => { goToPanelIndex(0) }} />
                        </div>
                        <div className='px-4 py-5 md:px-6 border-b-4 md:border-b-0 border-gray-100'>
                            <PaymentMethod payment={checkoutDetails.payment} onClick={() => { goToPanelIndex(1) }} />
                        </div>
                    </div>
                }

                rightColumn={
                    <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded'>
                        <Summary sum={data.sum} label={buttonLabel} disabled={false} showVouchers={false}
                            onClick={placeOrderClicked}
                        />
                    </div>
                }
            />
        </div>
    )
}

OverviewPanel.propTypes = {
    intl: intlShape.isRequired,
    data: PropTypes.object.isRequired,
    goToPanelIndex: PropTypes.func.isRequired,
    checkoutDetails: PropTypes.object,
}

export default injectIntl(OverviewPanel)
