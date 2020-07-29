import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import _ from 'lodash'

import { ReactComponent as EditIcon } from 'Icons/tailwind-icons/icon-edit.svg'
import { ReactComponent as TrashIcon } from 'Icons/tailwind-icons/icon-trash.svg'
import { ReactComponent as CheckCircleIcon } from 'Icons/tailwind-icons/icon-check-circle.svg'

const AddressCard = ({ address, countries, onEditClicked, onDeleteClicked }) => {
    const country = _.find(countries, c => { return c.code === address.country })

    return (
        <div className='text-base text-neutral-900 leading-tight'>
            <p className='font-bold'>{address.firstName} {address.lastName}</p>
            <p>{address.streetName}</p>
            <p>{address.city}</p>
            <p>{address.postalCode}</p>
            <p>{country.name}</p>

            <p className='mt-6'>{address.phone}</p>
            <p>{address.email}</p>

            {address.isDefaultShippingAddress &&
                <div className='mt-5 text-neutral-700'>
                    <CheckCircleIcon className='inline text-secondary-main fill-current mr-2' />
                    <FormattedMessage id='account.address.standardShipping' />
                </div>
            }

            {address.isDefaultBillingAddress &&
                <div className='text-neutral-700'>
                    <CheckCircleIcon className='inline text-secondary-main fill-current mr-2' />
                    <FormattedMessage id='account.address.standardBilling' />
                </div>
            }

            <div className='flex justify-end'>
                <div className='text-sm text-primary-main leading-normal cursor-pointer' onClick={onEditClicked}>
                    <FormattedMessage id='account.edit' />
                    <EditIcon className='inline fill-current ml-2' />
                </div>

                <div className='ml-3 text-sm text-primary-main leading-normal cursor-pointer' onClick={onDeleteClicked}>
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
