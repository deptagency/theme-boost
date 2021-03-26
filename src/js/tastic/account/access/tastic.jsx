import React from 'react'
import PropTypes from 'prop-types'

import tastify from '@frontastic/catwalk/src/js/helper/tastify'
import app from '@frontastic/catwalk/src/js/app/app'

import AccountAccess from '../../../patterns/molecules/Account/Forms/AccountAccess'

const AccountAccessTastic = ({ context, route }) => {
    if (context.session.loggedIn && route.route !== 'Frontastic.Frontend.Master.Account.profile') {
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
    route: PropTypes.object.isRequired,
}

export default tastify({
    translate: true,
    connect: {
        context: true,
        route: true,
    },
})(AccountAccessTastic)
