
import React from 'react'
import app from 'frontastic-catwalk/src/js/app/app'
import { FormattedMessage } from 'react-intl'

import EmptyState, { icons } from 'Organisms/EmptyState'

const NoOrders = () => {
    return (
        <EmptyState
            icon={icons.EMOTION_SAD}
            iconColor='text-neutral-900'
            title={<FormattedMessage id='order.noOrders' />}
            action={() => { return app.getRouter().history.replace('/') }}
            actionLabel={<FormattedMessage id='checkout.continueShopping' />}
        />
    )
}

export default NoOrders
