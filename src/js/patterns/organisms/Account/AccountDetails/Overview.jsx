import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import Button from 'Atoms/button'
import { ReactComponent as EditIcon } from 'Icons/tailwind-icons/icon-edit.svg'

const AccountDetailsOverview = ({ intl, firstName, lastName, email, openAccountDetailsForm, openChangePasswordForm }) => {
    return (
        <div className='md:shadow-lg'>
            <div className='border-b-4 border-neutral-200' />

            <div className='md:pb-4 mx-12'>
                <div className='mt-6 mb-6 sm:ml-24 md:ml-5'>
                    <div className='mb-4'>
                        <div className='text-sm text-neutral-600'><FormattedMessage id='checkout.form.firstName' /></div>
                        <div>{firstName} </div>
                    </div>
                    <div className='mb-4'>
                        <div className='text-sm text-neutral-600'><FormattedMessage id='checkout.form.lastName' /></div>
                        <div>{lastName} </div>
                    </div>
                    <div className='mb-6'>
                        <div className='text-sm text-neutral-600'><FormattedMessage id='checkout.form.email' /></div>
                        <div>{email} </div>
                    </div>
                    <button
                        aria-label={intl.formatMessage({ id: 'account.edit' })}
                        className='text-sm text-primary-500 leading-tight flex items-center'
                        onClick={openAccountDetailsForm}
                    >
                        <FormattedMessage id='account.edit' />
                        <EditIcon className='inline fill-current text-sm ml-2' />
                    </button>
                </div>
            </div>
            <div className='border-b-4 border-neutral-200' />
            <div className='text-center my-6'>
                <Button
                    name={intl.formatMessage({ id: 'account.changePassword' })}
                    variant='btn-outline btn-outline-black'
                    onClick={openChangePasswordForm}
                >
                    <FormattedMessage id='account.changePassword' />
                </Button>
            </div>
        </div>
    )
}

AccountDetailsOverview.propTypes = {
    intl: intlShape.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    openAccountDetailsForm: PropTypes.func.isRequired,
    openChangePasswordForm: PropTypes.func.isRequired,
}

export default injectIntl(AccountDetailsOverview)
