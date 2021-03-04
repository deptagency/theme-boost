import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import { convertToCountryName } from './../countries'
import { ReactComponent as EditIcon } from 'Icons/tailwind-icons/icon-edit.svg'

const Shipping = ({ intl, address, onClick }) => {
    return (
        <>
            <div className='mb-3 flex items-center justify-between'>
                <span className='text-xs text-neutral-600 font-bold leading-tight uppercase'>
                    <FormattedMessage id={'checkout.shippingInformation'} />
                </span>

                <span className='text-sm text-primary-500 leading-tight cursor-pointer flex items-center' onClick={onClick}>
                    <FormattedMessage id={'checkout.edit'} /> <EditIcon className='inline fill-current text-sm ml-2' />
                </span>
            </div>

            <div className='text-md text-neutral-900 leading-tight'>
                <p className='font-bold'>{address.firstName} {address.lastName}</p>
                <p>{address.streetName}</p>
                <p>{address.city}</p>
                <p>{address.postalCode}</p>
                <p>{convertToCountryName(intl, address.country)}</p>

                {(address.phone || address.email) && (
                    <div className='my-4 h-px bg-neutral-200' />
                )}

                <p>{address.phone}</p>
                <p>{address.email}</p>
            </div>
        </>
    )
}

Shipping.propTypes = {
    intl: intlShape.isRequired,
    address: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default injectIntl(Shipping)
