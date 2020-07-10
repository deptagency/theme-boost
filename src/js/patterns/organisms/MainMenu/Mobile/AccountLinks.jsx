import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import app from '@frontastic/catwalk/src/js/app/app'

import { ReactComponent as MyProfile } from 'Icons/tailwind-icons/icon-user.svg'

const AccountLinks = ({ closeMobileMenu }) => {
    const loggedIn = useSelector((state) => {
        return state.app.context.session.loggedIn
    })

    return (
        <>
            {!loggedIn && <div
                className='absolute bottom-0 left-0 right-0 flex border-b-4 border-t-4 border-gray-200 text-base px-5 pt-6 pb-5'
                onClick={() => {
                    closeMobileMenu()
                    app.getRouter().push('Frontastic.Frontend.Master.Account.index')
                }}
                >
                <MyProfile className='self-center text-2xl text-gray-500 fill-current mr-4' />
                <div className='text-base text-gray-800 self-center'>
                    <FormattedMessage id='account.login.login' /> | <FormattedMessage id='account.register.createAccount' />
                </div>
            </div>}

            {loggedIn && <div
                className='absolute bottom-0 left-0 right-0  flex border-b-4 border-t-4 border-gray-200 text-base px-5 pt-6 pb-5'
                onClick={() => {
                    closeMobileMenu()
                    app.getRouter().push('Frontastic.Frontend.Master.Account.profile')
                }}
                >
                <MyProfile className='self-center text-2xl text-gray-500 fill-current mr-4' />
                <div className='text-base font-bold text-gray-800 self-center'>
                    <FormattedMessage id='header.myAccount' />
                </div>
            </div>}
        </>
    )
}

AccountLinks.propTypes = {
    closeMobileMenu: PropTypes.func.isRequired,
}

export default AccountLinks
