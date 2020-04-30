import React from 'react'
import { FormattedMessage } from 'react-intl'

const PaymentMethod = () => {
    return (
        <form>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.paymentMethod'} />
            </div>

            <div className='px-4 py-3 border border-gray-400 rounded flex items-center'>
                <input type="radio" name="payment-method" value="invoice" id="invoice" className='mr-2' />
                <label className='text-sm leading-tight' htmlFor="invoice">
                    <FormattedMessage id={'checkout.invoice'} />
                </label>
            </div>
        </form>
    )
}

export default PaymentMethod
