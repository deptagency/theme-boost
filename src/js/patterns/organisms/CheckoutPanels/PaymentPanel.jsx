import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

import PaymentMethodForm from './Forms/PaymentMethod'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

const PaymentPanel = ({ intl, data, goToNextPanel, checkoutDetails, setCheckoutDetails }) => {
    const buttonLabel = intl.formatMessage({id: 'checkout.nextOverview'});

    const isValid = () => {
        return checkoutDetails.payment
    }

    return (
        <div>
            <StickyRightColumn
                variant='my-4 max-w-960px md:px-4 mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded'>
                        <div className='px-4 py-6 md:px-6 border-b-4 md:border-b-0 border-t-4 md:border-t-0 border-gray-100'>
                            <PaymentMethodForm onClick={(payment) => {
                                setCheckoutDetails({
                                    ...checkoutDetails,
                                    payment: payment
                                })
                            }}/>
                        </div>
                    </div>
                }

                rightColumn={
                    <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded'>
                        <Summary sum={data.sum} label={buttonLabel} disabled={!isValid()} showVouchers={false}
                            onClick={() => {
                                if (isValid()) {
                                    goToNextPanel()
                                }
                            }}
                        />
                    </div>
                }
            />
        </div>
    )
}

PaymentPanel.propTypes = {
    intl: intlShape.isRequired,
    data: PropTypes.object.isRequired,
    goToNextPanel: PropTypes.func.isRequired,
    checkoutDetails: PropTypes.object,
    setCheckoutDetails: PropTypes.func.isRequired,
}

export default injectIntl(PaymentPanel);
