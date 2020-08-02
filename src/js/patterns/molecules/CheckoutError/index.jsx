import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import EmptyState, { icons } from 'Organisms/EmptyState'

const CheckoutError = ({ onClick }) => {
    return (
        <EmptyState 
            icon={icons.EMOTION_SAD}
            iconColor='text-neutral-900'
            title={<FormattedMessage id='checkout.wentWrong' />}
            subtitle={<FormattedMessage id='checkout.beenCharged' />}
            action={(e) => {
                e.preventDefault()
                onClick()   
            }}
            actionLabel={<FormattedMessage id='checkout.tryAgain' />}
        />
    )
}

CheckoutError.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default CheckoutError
