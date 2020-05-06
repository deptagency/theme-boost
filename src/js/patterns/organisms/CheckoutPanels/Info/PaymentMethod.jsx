import React from 'react'
import { FormattedMessage } from 'react-intl'

import { ReactComponent as EditIcon } from 'Icons/tailwind-icons/icon-edit.svg'

const PaymentMethod = ({ payment, onClick }) => {
    return (
        <>
            <div className='mb-3 flex items-center justify-between cursor-pointer'>
                <span className='text-xs text-gray-500 font-bold leading-tight uppercase'>
                    <FormattedMessage id={'checkout.paymentMethod'} />
                </span>

                <span className='text-sm text-indigo-500 leading-tight flex items-center' onClick={onClick}>
                    <FormattedMessage id={'checkout.edit'} /> <EditIcon className='inline fill-current text-sm ml-2' />
                </span>
            </div>

            <div className='text-md text-gray-800 leading-tight'>{payment}</div>
        </>
    )
}

export default PaymentMethod
