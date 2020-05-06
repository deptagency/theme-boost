import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { ReactComponent as EditIcon } from 'Icons/tailwind-icons/icon-edit.svg'

const Delivery = ({ delivery, onClick }) => {
    return (
        <>
            <div className='mb-3 flex items-center justify-between'>
                <span className='text-xs text-gray-500 font-bold leading-tight uppercase'>
                    <FormattedMessage id={'checkout.shippingInformation'} />
                </span>

                <span className='text-sm text-indigo-500 leading-tight cursor-pointer flex items-center' onClick={onClick}>
                    <FormattedMessage id={'checkout.edit'} /> <EditIcon className='inline fill-current text-sm ml-2' />
                </span>
            </div>

            <div className='text-md text-gray-800 leading-tight'>
                <p className='font-bold'>{delivery.name} {delivery.surname}</p>
                <p>{delivery.address}</p>
                <p>{delivery.city}</p>
                <p>{delivery.zip}</p>
                <p>{delivery.country}</p>

                <div className='my-4 h-px bg-gray-200'></div>

                <p>{delivery.phone}</p>
                <p>{delivery.email}</p>
            </div>
        </>
    )
}

Delivery.propTypes = {
    delivery: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Delivery
