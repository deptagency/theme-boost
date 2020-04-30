import React from 'react'
import { FormattedMessage } from 'react-intl'

import { ReactComponent as EditIcon } from 'Icons/tailwind-icons/icon-edit.svg'

const Delivery = ({ onClick }) => {
    return (
        <>
            <div className='mb-3 flex items-center justify-between'>
                <span className='text-xs text-gray-500 font-bold leading-tight uppercase'>
                    <FormattedMessage id={'checkout.shippingInformation'} />
                </span>

                <span className='text-sm text-indigo-500 leading-tight flex items-center' onClick={onClick}>
                    <FormattedMessage id={'checkout.edit'} /> <EditIcon className='inline fill-current text-sm ml-2' />
                </span>
            </div>

            <div className='text-md text-gray-800 leading-tight'>
                <p className='font-bold'>Alexandra Jones</p>
                <p>Praesidenten Str. 79</p>
                <p>Rheinland Pfalz</p>
                <p>67727</p>
                <p>Germnay</p>

                <div className='my-4 h-px bg-gray-200'></div>

                <p>030 98 29381</p>
                <p>wmahler@patriks.com</p>
            </div>
        </>
    )
}

export default Delivery
