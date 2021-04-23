import React, { useState } from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import AccountMenu from '../../../patterns/molecules/Account/Menu'
import WelcomeOverview from '../../../patterns/organisms/Account/AccountOverview/welcomeOverview'
import AccountAddresses from '../../../patterns/organisms/Account/AccountAddresses'

import MENU_ITEMS from '../../../patterns/molecules/Account/Menu/MENU_ITEMS'

const AccountAddressTastic = ({ data, context, route }) => {
    const [openPanel, setOpenPanel] = useState(true)
    const {
        session: {
            loggedIn,
            account: { addresses, firstName },
        },
    } = context

    if (!loggedIn && route.route !== 'Frontastic.Frontend.Master.Account.index') {
        app.getRouter().push('Frontastic.Frontend.Master.Account.index')
    }

    return (
        <AccountMenu
            selectedMenuItem={MENU_ITEMS.ADDRESSES}
            welcome={<WelcomeOverview firstName={firstName} />}
            handleLogout={app.getLoader('context').logout}
            openPanel={() => {
                setOpenPanel(true)
            }}
            >
            <AccountAddresses
                addresses={addresses}
                openPanel={openPanel}
                countries={data.countries}
                onClose={() => {
                    setOpenPanel(false)
                }}
            />
        </AccountMenu>
    )
}

AccountAddressTastic.propTypes = {
    context: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
}

export default tastify({
    translate: true,
    connect: {
        context: true,
        route: true,
    },
})(AccountAddressTastic)
