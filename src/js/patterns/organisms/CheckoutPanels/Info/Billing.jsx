import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { ReactComponent as EditIcon } from 'Icons/tailwind-icons/icon-edit.svg'

const Billing = ({ billing, onClick }) => {
    return (
        <>
            <div className='mb-3 flex items-center justify-between'>
                <span className='text-xs text-gray-500 font-bold leading-tight uppercase'>
                    <FormattedMessage id={'checkout.billingInformation'} />
                </span>

                <span className='text-sm text-indigo-500 leading-tight cursor-pointer flex items-center' onClick={onClick}>
                    <FormattedMessage id={'checkout.edit'} /> <EditIcon className='inline fill-current text-sm ml-2' />
                </span>
            </div>

            <div className='text-md text-gray-800 leading-tight'>
                <p className='font-bold'>{billing.name} {billing.surname}</p>
                <p>{billing.address}</p>
                <p>{billing.city}</p>
                <p>{billing.zip}</p>
                <p>{billing.country}</p>

                <div className='my-4 h-px bg-gray-200' />

                <p>{billing.phone}</p>
                <p>{billing.email}</p>
            </div>
        </>
    )
}

Billing.propTypes = {
    billing: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Billing
