import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import ButtonWithLoader from 'Atoms/button/WithLoader'

const RemoveAddressForm = ({ address, onRemoveAddressClicked, showLoader }) => {
    return (
        <>
            <div className='text-base text-gray-800 leading-normal'>
                <p>{address.streetName}</p>
                <p>{address.city}</p>
                <p>{address.postalCode}</p>
                <p>{address.country}</p>
            </div>

            <div className='text-center mt-6'>
                <ButtonWithLoader
                    showLoader={showLoader}
                    onClick={onRemoveAddressClicked}
                    variant='btn btn-indigo w-full'
                >
                    <FormattedMessage id='account.delete' />
                </ButtonWithLoader>
            </div>
        </>
    )
}

RemoveAddressForm.propTypes = {
   address: PropTypes.object,
   onRemoveAddressClicked: PropTypes.func.isRequired,
   showLoader: PropTypes.bool.isRequired,
}

export default RemoveAddressForm