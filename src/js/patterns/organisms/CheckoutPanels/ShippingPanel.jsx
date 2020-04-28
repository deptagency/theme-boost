import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { injectIntl, intlShape } from 'react-intl'

import Button from 'Atoms/button'
import Input from 'Atoms/input'

import AddressForm from './Forms/Address'
import BillingForm from './Forms/Billing'
import ShippingForm from './Forms/Shipping'

import Summary from 'Organisms/Cart/FullCart/Summary'
import StickyRightColumn from 'Molecules/Layout/StickyRightColumn'

const ShippingPanel = ({ name, errorMessage, goToNextPanel, intl }) => {
    const [ valid, setValid ] = useState(true)
    const [ email, setEmail ] = useState('')

    const buttonLabel = 'Next: Payment' //intl.formatMessage({id: 'checkout.nextPayment'});

    return (
        <div className='flex items-center p-4'>
            <StickyRightColumn
                variant='my-4 max-w-960px md:px-4 mx-auto'
                leftColumn={
                    <div className='md:shadow-md md:rounded md:px-6 md:pt-5 md:pb-6'>
                        <ShippingForm />

                        <AddressForm />

                        <Input
                            className={classnames({
                                'form-input': true,
                                'border border-red-600': !valid,
                            })}
                            placeholder='Enter your email'
                            onChange={(e) => {
                                setValid(e.target.value.length > 0)
                                setEmail(e.target.value)
                            }}
                        />
                        {!valid && <div className='text-red-600 font-bold'>
                            {errorMessage}
                        </div>}
                    </div>
                }

                rightColumn={
                    <div className='md:shadow-md md:rounded md:p-4'>
                        <Summary sum={10} label={buttonLabel} showVouchers={false}
                             onClick={() => {
                                 if (email.length === 0) {
                                     setValid(false)
                                     return
                                 }

                                 valid && goToNextPanel()
                             }}
                        />
                    </div>
                }
            />
        </div>
    )
}

ShippingPanel.propTypes = {
    name: PropTypes.node.isRequired,
    errorMessage: PropTypes.string,
    goToNextPanel: PropTypes.func.isRequired,
    intl: intlShape.isRequired,
}

export default injectIntl(ShippingPanel);
