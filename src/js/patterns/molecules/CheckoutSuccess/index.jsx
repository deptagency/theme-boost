import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import EmptyState, { icons } from '../../organisms/EmptyState'

const CheckoutSuccess = ({ intl, id, email, onClick }) => {
    const title = intl.formatMessage({ id: 'checkout.orderConfirmed' })
    const actionLabel = intl.formatMessage({ id: 'checkout.backToShop' })
    const orderConfirmation = intl.formatMessage({ id: 'checkout.orderConfirmation' })

    return (
        <EmptyState
            icon={icons.CHECKMARK_CIRCLE}
            iconColor='text-green-700'
            title={title}
            subtitle={
                <>
                    <FormattedMessage id='checkout.yourOrderId' /> {id}
                </>
            }
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
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default injectIntl(CheckoutSuccess)
