import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import ButtonWithLoader from 'Atoms/button/WithLoader'

const RemoveAddressForm = ({ intl, address, countries, onRemoveAddressClicked, showLoader }) => {
    let country = null
    for (let c of countries) {
        if (c.code === address.country) {
            country = c
        }
    }

    return (
        <div className='m-6'>
            <div className='text-base text-neutral-900 leading-normal'>
                <p>{address.streetName}</p>
                <p>{address.city}</p>
                <p>{address.postalCode}</p>
                <p>{country.name}</p>
            </div>

            <div className='text-center mt-6'>
                <ButtonWithLoader
                    name={intl.formatMessage({ id: 'account.delete' })}
                    showLoader={showLoader}
                    onClick={onRemoveAddressClicked}
                    variant='btn btn-primary w-full'
                >
                    <FormattedMessage id='account.delete' />
                </ButtonWithLoader>
            </div>
        </div>
    )
}

RemoveAddressForm.propTypes = {
    intl: intlShape.isRequired,
    address: PropTypes.object,
    countries: PropTypes.array.isRequired,
    onRemoveAddressClicked: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
}

export default injectIntl(RemoveAddressForm)
