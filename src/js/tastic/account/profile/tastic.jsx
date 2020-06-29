import React from 'react'
import { useSelector } from 'react-redux'
import app from '@frontastic/catwalk/src/js/app/app'

import AccountOverview from 'Organisms/Account/AccountOverview/index'

const AccountProfileTastic = () => {
    const { session } = useSelector((state) => {
        return {
            session: state.app.context.session,
        }
    })

    if (!session.loggedIn) {
        app.getRouter().push('Frontastic.Frontend.Master.Account.index')
    }

    return (
        <AccountOverview
            firstName={session.account.firstName}
            lastName={session.account.lastName}
            email={session.account.email}
            handleLogout={app.getLoader('context').logout}
            handlePasswordChange={app.getLoader('context').updatePassword}
        />
    )
}

export default AccountProfileTastic
