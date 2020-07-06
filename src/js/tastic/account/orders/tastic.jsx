import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import app from '@frontastic/catwalk/src/js/app/app'

import AccountMenu from 'Molecules/Account/Menu'
import WelcomeOverview from 'Organisms/Account/AccountOverview/welcomeOverview'
import AccountOrders from 'Organisms/Account/AccountOrders'

import MENU_ITEMS from 'Molecules/Account/Menu/MENU_ITEMS'

const AccountOrdersTastic = ({ data: { stream } }) => {
    const [ openPanel, setOpenPanel ] = useState(true)

    const { session: { loggedIn, account: { firstName } } } = useSelector((state) => {
        return {
            session: state.app.context.session,
        }
    })

    if (!loggedIn) {
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
}

export default AccountOrdersTastic
