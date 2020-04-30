import React from 'react'
import { FormattedMessage } from 'react-intl'

import { ReactComponent as EditIcon } from 'Icons/tailwind-icons/icon-edit.svg'

const PaymentMethod = ({ onClick }) => {
    return (
        <>
            <div className='mb-3 flex items-center justify-between'>
                <span className='text-xs text-gray-500 font-bold leading-tight uppercase'>
                    <FormattedMessage id={'checkout.paymentMethod'} />
                </span>

                <span className='text-sm text-indigo-500 leading-tight flex items-center' onClick={onClick}>
                    <FormattedMessage id={'checkout.edit'} /> <EditIcon className='inline fill-current text-sm ml-2' />
                </span>
            </div>

            <div className='text-md text-gray-800 leading-tight'>
                Invoice
            </div>
        </>
    )
}

export default PaymentMethod
