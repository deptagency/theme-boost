import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import _ from 'lodash'

import { ReactComponent as EditIcon } from 'Icons/tailwind-icons/icon-edit.svg'

const Shipping = ({ address, countries, onClick }) => {
    const country = _.find(countries, c => { return c.code === address.country })

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
                <p className='font-bold'>{address.firstName} {address.lastName}</p>
                <p>{address.streetName}</p>
                <p>{address.city}</p>
                <p>{address.postalCode}</p>
                <p>{country.name}</p>

                <div className='my-4 h-px bg-gray-200' />

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
