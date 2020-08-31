import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { ReactComponent as EditIcon } from 'Icons/tailwind-icons/icon-edit.svg'

const Shipping = ({ address, countries, onClick }) => {
    let country = null
    for (let c of countries) {
        if (c.code === address.country) {
            country = c
        }
    }

    return (
        <>
            <div className='mb-3 flex items-center justify-between'>
                <span className='text-xs text-neutral-600 font-bold leading-tight uppercase'>
                    <FormattedMessage id={'checkout.shippingInformation'} />
                </span>

                <span
                    className='text-sm text-primary-500 leading-tight cursor-pointer flex items-center'
                    onClick={onClick}
                >
                    <FormattedMessage id={'checkout.edit'} /> <EditIcon className='inline fill-current text-sm ml-2' />
                </span>
            </div>

            <div className='text-md text-neutral-900 leading-tight'>
                <p className='font-bold'>
                    {address.firstName} {address.lastName}
                </p>
                <p>{address.streetName}</p>
                <p>{address.city}</p>
                <p>{address.postalCode}</p>
                <p>{country.name}</p>

                <div className='my-4 h-px bg-neutral-200' />

                <p>{address.phone}</p>
                <p>{address.email}</p>
            </div>
        </>
    )
}

Shipping.propTypes = {
    address: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Shipping
