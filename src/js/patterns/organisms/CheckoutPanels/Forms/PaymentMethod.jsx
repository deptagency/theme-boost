import React from 'react'
import { FormattedMessage } from 'react-intl'

const PaymentMethod = () => {
    return (
        <form>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                Payment method
            </div>

            <div className='px-4 py-3 border border-gray-400 rounded flex items-center'>
                <input type="radio" name="payment-method" value="invoice" id="invoice" className='mr-2' />
                <label htmlFor="invoice" className='text-sm leading-tight'>Invoice</label>
            </div>
        </form>
    )
}

export default PaymentMethod
