import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

import PaymentMethodForm from './Forms/PaymentMethod'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

// TODO Sanja - This should be added on a tastic level
import app from 'frontastic-catwalk/src/js/app/app'

const PaymentPanel = ({ intl, data, goToNextPanel, checkoutDetails, setCheckoutDetails }) => {
    const buttonLabel = intl.formatMessage({ id: 'checkout.nextOverview' })

    const isValid = () => {
        return checkoutDetails.payment
    }

    const updateCrt = () => {
        if (isValid()) {
            // goToNextPanel()

            // put nice loaders here

            /*return new Payment(
                [
                    'id' => $paymentData['key'] ?? null,
                'paymentId' => $paymentData['interfaceId'] ?? null,
                'paymentProvider' => $paymentData['paymentMethodInfo']['paymentInterface'] ?? null,
                'paymentMethod' => $paymentData['paymentMethodInfo']['method'] ?? null,
                'amount' => $paymentData['amountPlanned']['centAmount'] ?? null,
                'currency' => $paymentData['amountPlanned']['currencyCode'] ?? null,
                'debug' => json_encode($paymentData),
                'paymentStatus' => $paymentData['paymentStatus']['interfaceCode'] ?? null,
                'version' => $paymentData['version'] ?? 0,
        ]
        );*/

            app.getLoader('cart')
                .updateCart({
                    paymentInfo: {
                        payments: [
                            {
                                paymentMethod: 'invoice'
                            }
                        ]
                    },

                })
                .then((info) => {
                    console.log('... info ...', info, data)
                    goToNextPanel()
                })
                .catch((error) => {
                    console.log('Payment invoice error', error)
                    // setShowServerError(true)
                    // return <div>'ERROR >..'</div>
                })
        }

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
                                    payment: payment,
                                })
                            }} />
                        </div>
                    </div>
                }

                rightColumn={
                    <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded'>
                        <Summary sum={data.sum} label={buttonLabel} disabled={!isValid()} showVouchers={false}
                            onClick={updateCrt}
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

export default injectIntl(PaymentPanel)
