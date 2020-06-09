import React from 'react'
import { useSelector } from 'react-redux'
import app from '@frontastic/catwalk/src/js/app/app'
import { FormattedMessage } from 'react-intl'
import Button from 'Atoms/button'

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
        <div>
            <AccountOverview firstName={session.account.firstName} />
            <Button
                variant='btn btn-indigo mt-4'
                onClick={() => { app.getLoader('context').logout() }}
            >
                <FormattedMessage id='account.logout' />
            </Button>
        </div>
    )
}

export default AccountProfileTastic
