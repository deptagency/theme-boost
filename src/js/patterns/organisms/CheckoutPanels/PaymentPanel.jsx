import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

import PaymentMethodForm from './Forms/PaymentMethod'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

const PaymentPanel = ({ goToNextPanel, intl, data }) => {
    const buttonLabel = intl.formatMessage({id: 'checkout.nextOverview'});

    return (
        <div>
            <StickyRightColumn
                variant='my-4 max-w-960px md:px-4 mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded'>
                        <div className='px-4 py-6 md:px-6 border-b-4 md:border-b-0 border-t-4 md:border-t-0 border-gray-100'>
                            <PaymentMethodForm />
                        </div>
                    </div>
                }

                rightColumn={
                    <div className='px-4 py-6 md:py-4 md:shadow-md md:rounded'>
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

PaymentPanel.propTypes = {
    errorMessage: PropTypes.string,
    goToNextPanel: PropTypes.func.isRequired,
    goToPreviousPanel: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
}

export default injectIntl(PaymentPanel);
