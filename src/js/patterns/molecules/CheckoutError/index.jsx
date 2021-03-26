import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape } from 'react-intl'

import EmptyState, { icons } from '../../organisms/EmptyState'

const CheckoutError = ({ intl, onClick }) => {
    const title = intl.formatMessage({ id: 'checkout.wentWrong' })
    const actionLabel = intl.formatMessage({ id: 'checkout.tryAgain' })

    return (
        <EmptyState
            icon={icons.EMOTION_SAD}
            iconColor='text-neutral-900'
            title={title}
            action={(e) => {
                e.preventDefault()
                onClick()
            }}
            actionLabel={actionLabel}
        />
    )
}

CheckoutError.propTypes = {
    intl: intlShape.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default injectIntl(CheckoutError)
