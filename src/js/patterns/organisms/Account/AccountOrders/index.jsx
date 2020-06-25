import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import PanelBlockResponsive from 'Molecules/Layout/PanelBlockResponsive'
import ListOrders from './ListOrders'

const AccountOrders = ({ openPanel, onClose, orders }) => {
    return (
        <PanelBlockResponsive
            title={<FormattedMessage id='account.placedOrders' />}
            isOpen={openPanel}
            onClose={onClose}
            >
            <ListOrders orders={orders} />
        </PanelBlockResponsive>
    )
}

AccountOrders.propTypes = {
    openPanel: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    orders: PropTypes.array.isRequired,
}

export default AccountOrders
