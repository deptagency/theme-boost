import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'
import WelcomeOverview from './welcomeOverview'
import AccountDetails from '../AccountDetails/index'
import MenuItem from './menuItem'

import { ReactComponent as CartIcon } from 'Icons/tailwind-icons/icon-cart.svg'
import { ReactComponent as RightIcon } from 'Icons/tailwind-icons/icon-chevron-right.svg'
import { ReactComponent as HomeIcon } from 'Icons/tailwind-icons/icon-home.svg'
import { ReactComponent as UserIcon } from 'Icons/tailwind-icons/icon-user.svg'

const AccountOverview = ({ firstName, lastName, email, handleLogout, handlePasswordChange, handleUpdateUserDetails }) => {
    const [showAccountDetails, setShowAccountDetails] = useState(false)
    const toggleShowDetails = () => { return setShowAccountDetails(!showAccountDetails) }

    return (
        <div className='m-auto md:grid grid-cols-2 grid-rows-1 grid-cols-1fr-2fr md:w-11/12 md:mt-4 text-gray-800'>

            <div className='md:hidden'>
                <WelcomeOverview firstName={firstName} />
            </div>

            <div className='flex-auto md:shadow-lg'>
                <MenuItem className='profileMenuItem'>
                    <div className='flex'>
                        <CartIcon className='mr-2 text-2xl text-gray-500 fill-current' />
                        <div>
                            <FormattedMessage id='account.placedOrders' />
                        </div>
                    </div>
                    <RightIcon className='md:hidden' />
                </MenuItem>
                <MenuItem>
                    <div className='flex'>
                        <HomeIcon className='mr-2 text-2xl text-gray-500 fill-current' />
                        <div>
                            <FormattedMessage id='account.addresses' />
                        </div>
                    </div>
                    <RightIcon className='md:hidden' />
                </MenuItem>
                <MenuItem
                    onClick={toggleShowDetails}
                    selected={showAccountDetails}
                >
                    <div className='flex'>
                        <UserIcon className={classnames({
                            'mr-2 text-2xl text-gray-500 fill-current': true,
                            'text-indigo-500': showAccountDetails,
                        })} />
                        <div>
                            <FormattedMessage id='account.accountDetails' />
                        </div>
                    </div>
                    <RightIcon className='md:hidden' />
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <div className='flex'>
                        <UserIcon className='mr-2 text-2xl text-gray-500 fill-current' />
                        <FormattedMessage id='account.logout' />
                    </div>
                </MenuItem>
            </div>

            {!showAccountDetails && <WelcomeOverview variant='hidden md:flex row-start-1 col-start-2' firstName={firstName} />}

            <AccountDetails
                showAccountDetails={showAccountDetails}
                setShowAccountDetails={setShowAccountDetails}
                firstName={firstName}
                lastName={lastName}
                email={email}
                handlePasswordChange={handlePasswordChange}
                handleUpdateUserDetails={handleUpdateUserDetails}
            />

        </div>
    )
}

AccountOverview.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    handleLogout: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    handleUpdateUserDetails: PropTypes.func.isRequired,
}

export default AccountOverview
