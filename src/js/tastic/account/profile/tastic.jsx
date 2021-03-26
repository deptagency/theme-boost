import React, { useState } from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import AccountMenu from '../../../molecules/Account/Menu'
import WelcomeOverview from '../../../organisms/Account/AccountOverview/welcomeOverview'
import AccountDetails from '../../../organisms/Account/AccountDetails'

import MENU_ITEMS from '../../../molecules/Account/Menu/MENU_ITEMS'

const AccountProfileTastic = ({ context, route }) => {
    const [openPanel, setOpenPanel] = useState(true)
    const {
        session: {
            loggedIn,
            account: { firstName, lastName, email },
        },
    } = context

    if (!loggedIn && route.route !== 'Frontastic.Frontend.Master.Account.index') {
        app.getRouter().push('Frontastic.Frontend.Master.Account.index')
    }

    return (
        <AccountMenu
            selectedMenuItem={MENU_ITEMS.ACCOUNT_DETAILS}
            welcome={<WelcomeOverview firstName={firstName} />}
            handleLogout={app.getLoader('context').logout}
            openPanel={() => {
                setOpenPanel(true)
            }}
            >
            <AccountDetails
                firstName={firstName}
                lastName={lastName}
                email={email}
                openPanel={openPanel}
                onClose={() => {
                    setOpenPanel(false)
                }}
                handlePasswordChange={app.getLoader('context').updatePassword}
                handleUpdateUserDetails={app.getLoader('context').updateUser}
            />
        </AccountMenu>
    )
}

AccountProfileTastic.propTypes = {
    context: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
}

export default tastify({
    translate: true,
    connect: {
        context: true,
        route: true,
    },
})(AccountProfileTastic)
