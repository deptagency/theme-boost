import React from 'react'
import { FormattedMessage } from 'react-intl'

import EmptyState, { icons } from 'Organisms/EmptyState'

const EmptyCart = () => {
    return (
        <EmptyState
            icon={icons.EMOTION_SAD}
            iconColor='text-neutral-900'
            title={<FormattedMessage id='cart.emptyCart.text' />}
        />
    )
}

export default EmptyCart
