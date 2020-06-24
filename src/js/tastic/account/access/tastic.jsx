import React from 'react'
import { useSelector } from 'react-redux'
import app from '@frontastic/catwalk/src/js/app/app'

import AccountAccess from 'Molecules/Account/Forms/AccountAccess'

const AccountAccessTastic = () => {
    const context = useSelector((state) => {
        return state.app.context
    })

    if (context.session.loggedIn) {
        app.getRouter().push('Frontastic.Frontend.Master.Account.profile')
    }

    return (
        <AccountAccess
            handleRegister={app.getLoader('context').register}
            handleLogin={app.getLoader('context').login}
            handleRequestPasswordReset={app.getLoader('context').requestPasswordReset}
        />
    )
}

export default AccountAccessTastic
