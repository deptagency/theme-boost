import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

import EmptyState, { icons } from 'Organisms/EmptyState'

const CheckoutSuccess = ({ intl, email, onClick }) => {
    const title = intl.formatMessage({ id: 'checkout.orderConfirmed' })
    const actionLabel = intl.formatMessage({ id: 'checkout.tryAgain' })
    const orderConfirmation = intl.formatMessage({ id: 'checkout.orderConfirmation' })

    return (
        <EmptyState
            icon={icons.CHECKMARK_CIRCLE}
            iconColor='text-neutral-900'
            title={title}
            action={(e) => {
                e.preventDefault()
                onClick()
            }}
            actionLabel={actionLabel}
            >
            <>
                {orderConfirmation}
                <span className='font-bold ml-1'>{email}</span>
            </>
        </EmptyState>
    )
}

CheckoutSuccess.propTypes = {
    intl: intlShape.isRequired,
    email: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default injectIntl(CheckoutSuccess)
