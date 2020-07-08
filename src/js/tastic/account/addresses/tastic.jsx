import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import app from '@frontastic/catwalk/src/js/app/app'

import AccountMenu from 'Molecules/Account/Menu'
import WelcomeOverview from 'Organisms/Account/AccountOverview/welcomeOverview'
import AccountAddresses from 'Organisms/Account/AccountAddresses'

import MENU_ITEMS from 'Molecules/Account/Menu/MENU_ITEMS'

const AccountAddressTastic = () => {
    console.log('i am here')
    
    const [ openPanel, setOpenPanel ] = useState(true)

    const { session: { loggedIn, account: { addresses, firstName } } } = useSelector((state) => {
        return {
            session: state.app.context.session,
        }
    })

    if (!loggedIn) {
        app.getRouter().push('Frontastic.Frontend.Master.Account.index')
    }

    return (
        <AccountMenu
            selectedMenuItem={MENU_ITEMS.ADDRESSES}
            welcome={<WelcomeOverview firstName={firstName} />}
            handleLogout={app.getLoader('context').logout}
            openPanel={() => { setOpenPanel(true) }}
            >
            <AccountAddresses
                addresses={addresses}
                openPanel={openPanel}
                onClose={() => { setOpenPanel(false) }}
                handleAddAddress={app.getLoader('context').addAddress}
                handleUpdateAddress={app.getLoader('context').updateAddress}
                handleRemoveAddress={app.getLoader('context').removeAddress}
                handleSetDefaultBillingAddress={app.getLoader('context').setDefaultBillingAddress}
                handleSetDefaultShippingAddress={app.getLoader('context').setDefaultShippingAddress}
            />
        </AccountMenu>
    )
}

export default AccountAddressTastic
