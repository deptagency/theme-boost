import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

import Products from './Info/Products'
import Billing from './Info/Billing'
import Shipping from './Info/Shipping'
import PaymentMethod from './Info/PaymentMethod'
import OrderSummary from './Info/OrderSummary'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

const OverviewPanel = ({ name, errorMessage, goToPanelIndex, intl, data }) => {
    const buttonLabel = 'Place: Order' //intl.formatMessage({id: 'checkout.placeOrder'});

    return (
        <div className='flex items-center'>
            <StickyRightColumn
                variant='my-4 max-w-960px md:px-4 mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded'>
                        <div className='sm:hidden p-4 md:px-6 border-b-4 border-gray-100 border-t-4 md:border-t-0'>
                            <OrderSummary label={buttonLabel} />
                        </div>
                        <div className='px-4 py-6 md:px-6 border-b-4 border-gray-100'>
                            <Products products={data.lineItems} />
                        </div>
                        <div className='px-4 py-6 md:px-6 border-b-4 border-gray-100'>
                            <Billing onClick={() => { goToPanelIndex(0) }} />
                        </div>
                        <div className='px-4 py-6 md:px-6 border-b-4 border-gray-100'>
                            <Shipping onClick={() => { goToPanelIndex(0) }} />
                        </div>
                        <div className='px-4 py-6 md:px-6 border-b-4 md:border-b-0 border-gray-100'>
                            <PaymentMethod onClick={() => { goToPanelIndex(1) }} />
                        </div>
                    </div>
                }

                rightColumn={
                    <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded'>
                        <Summary sum={data.sum} label={buttonLabel} disabled={false} showVouchers={false}
                            onClick={() => {
                                console.log('Placing order')
                            }}
                        />
                    </div>
                }
            />
        </div>
    )
}

OverviewPanel.propTypes = {
    name: PropTypes.node.isRequired,
    errorMessage: PropTypes.string,
    goToPreviousPanel: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
}

export default injectIntl(OverviewPanel);
