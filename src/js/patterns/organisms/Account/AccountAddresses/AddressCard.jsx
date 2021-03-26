import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import { ReactComponent as EditIcon } from '../../../../../icons/tailwind-icons/icon-edit.svg'
import { ReactComponent as TrashIcon } from '../../../../../icons/tailwind-icons/icon-trash.svg'
import { ReactComponent as CheckCircleIcon } from '../../../../../icons/tailwind-icons/icon-check-circle.svg'

const AddressCard = ({ address, countries, onEditClicked, onDeleteClicked }) => {
    let country = null
    for (let c of countries) {
        if (c.code === address.country) {
            country = c
        }
    }

    return (
        <div className='text-base text-neutral-900 leading-tight'>
            <p className='font-bold'>
                {address.firstName} {address.lastName}
            </p>
            <p>{address.streetName}</p>
            <p>{address.city}</p>
            <p>{address.postalCode}</p>
            <p>{country.name}</p>

            <p className='mt-6'>{address.phone}</p>
            <p>{address.email}</p>

            {address.isDefaultShippingAddress && (
                <div className='mt-5 text-neutral-700'>
                    <CheckCircleIcon className='inline text-primary-500 fill-current mr-2' />
                    <FormattedMessage id='account.address.standardShipping' />
                </div>
            )}

            {address.isDefaultBillingAddress && (
                <div className='text-neutral-700'>
                    <CheckCircleIcon className='inline text-primary-500 fill-current mr-2' />
                    <FormattedMessage id='account.address.standardBilling' />
                </div>
            )}

            <div className='flex justify-end'>
                <div className='text-sm text-primary-500 leading-normal cursor-pointer' onClick={onEditClicked}>
                    <FormattedMessage id='account.edit' />
                    <EditIcon className='inline fill-current ml-2' />
                </div>

                <div className='ml-3 text-sm text-primary-500 leading-normal cursor-pointer' onClick={onDeleteClicked}>
                    <FormattedMessage id='account.delete' />
                    <TrashIcon className='inline fill-current ml-2' />
                </div>
            </div>
        </div>
    )
}

AddressCard.propTypes = {
    address: PropTypes.object,
    countries: PropTypes.array.isRequired,
    onEditClicked: PropTypes.func.isRequired,
    onDeleteClicked: PropTypes.func.isRequired,
}

export default AddressCard
