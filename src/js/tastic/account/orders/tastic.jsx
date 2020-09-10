import React, { useState } from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import AccountMenu from 'Molecules/Account/Menu'
import WelcomeOverview from 'Organisms/Account/AccountOverview/welcomeOverview'
import AccountOrders from 'Organisms/Account/AccountOrders'

import MENU_ITEMS from 'Molecules/Account/Menu/MENU_ITEMS'

const AccountOrdersTastic = ({ data: { stream }, context, route }) => {
    const [ openPanel, setOpenPanel ] = useState(true)
    const { session: { loggedIn, account: { firstName } } } = context

    if (!loggedIn && route.route !== 'Frontastic.Frontend.Master.Account.index') {
        app.getRouter().push('Frontastic.Frontend.Master.Account.index')
    }

    return (
        <AccountMenu
            selectedMenuItem={MENU_ITEMS.ORDERS}
            welcome={<WelcomeOverview firstName={firstName} />}
            handleLogout={app.getLoader('context').logout}
            openPanel={() => { setOpenPanel(true) }}
            >
            <AccountOrders
                orders={stream}
                openPanel={openPanel}
                onClose={() => { setOpenPanel(false) }}
            />
        </AccountMenu>
    )
}

AccountOrdersTastic.propTypes = {
    data: PropTypes.object.isRequired,
    context: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
}

export default tastify({
    translate: true,
    connect: {
        context: true,
        route: true,
    },
})(AccountOrdersTastic)
