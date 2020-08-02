import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import EmptyState, { icons } from 'Organisms/EmptyState'

const CheckoutSuccess = ({ id, email, onClick }) => {
    return (
        <EmptyState 
            icon={icons.CHECKMARK_CIRCLE}
            iconColor='text-neutral-900'
            title={<FormattedMessage id='checkout.orderConfirmed' />}
            subtitle={
                <>
                    <FormattedMessage id='checkout.beenCharged' />  {id}
                </>
            }
            action={(e) => {
                e.preventDefault()
                onClick()   
            }}
            actionLabel={<FormattedMessage id='checkout.tryAgain' />}
        >
            <FormattedMessage id='checkout.orderConfirmation' />
            <span className='font-bold ml-1'>{email}</span>
        </EmptyState>
    )
}

CheckoutSuccess.propTypes = {
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default CheckoutSuccess
