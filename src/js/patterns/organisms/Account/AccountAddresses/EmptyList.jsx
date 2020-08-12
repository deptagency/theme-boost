import React from 'react'
import { FormattedMessage } from 'react-intl'

import EmptyState, { icons } from 'Organisms/EmptyState'

const EmptyList = () => {
    return (
        <EmptyState
            icon={icons.EMOTION_SAD}
            iconColor='text-neutral-900'
            title={<FormattedMessage id='account.address.addressEmpty' />}
        />
    )
}

export default EmptyList
