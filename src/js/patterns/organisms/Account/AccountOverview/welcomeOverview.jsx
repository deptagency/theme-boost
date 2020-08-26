import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { ReactComponent as HappyIcon } from 'Icons/tailwind-icons/icon-emotion-happy.svg'

const WelcomeOverview = ({ firstName, variant = '' }) => {
    return (
        <div className={`flex-auto md:shadow-lg md:order-2 md:ml-5 ${variant}`}>
            <div className='flex flex-col text-center justify-center w-64 mx-auto my-5 md:pb-56'>
                <div className='mx-auto mb-5'>
                    <HappyIcon className='w-20 h-20 text-primary-200 fill-current' />
                </div>
                <div>
                    <div className='font-bold text-2xl mb-2'>
                        <FormattedMessage id='account.welcome' />
                        {firstName}
                    </div>
                    <div className='text-sm text-neutral-600'>
                        <FormattedMessage id='account.latestDetails' />
                    </div>
                </div>
            </div>
        </div>
    )
}

WelcomeOverview.propTypes = {
    firstName: PropTypes.string.isRequired,
    variant: PropTypes.string,
}

export default WelcomeOverview
