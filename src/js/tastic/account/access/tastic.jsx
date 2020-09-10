import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import AccountAccess from 'Molecules/Account/Forms/AccountAccess'

const AccountAccessTastic = ({ context }) => {
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

AccountAccessTastic.propTypes = {
    context: PropTypes.object.isRequired,
}

export default tastify({ translate: true, connect: { context: true } })(AccountAccessTastic)
