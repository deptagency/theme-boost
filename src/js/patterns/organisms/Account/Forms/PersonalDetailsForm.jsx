import React from 'react'
import PropTypes from 'prop-types'
import Button from 'Atoms/button'
import { FormattedMessage } from 'react-intl'

const PersonalDetailsForm = ({ firstName, lastName, email, onSubmit = () => {} }) => {
    return (
        <form className='flex-col pt-6 m-auto w-3/4 md:w-11/12 md:p-0 md:pb-2`'>
            <div className='mb-4'>
                <div className='text-sm text-gray-600'><FormattedMessage id='checkout.form.firstName' /></div>
                <input
                    id='login-firstname'
                    name='firstName'
                    type='text'
                    className='form-input mt-2'
                    value={firstName}
                />
            </div>
            <div className='mb-4'>
                <div className='text-sm text-gray-600'><FormattedMessage id='checkout.form.lastName' /></div>
                <input
                    id='login-lastname'
                    name='lastName'
                    type='text'
                    className='form-input mt-2'
                    value={lastName}
                />
            </div>
            <div className='mb-4'>
                <div className='text-sm text-gray-600'><FormattedMessage id='checkout.form.email' /></div>
                <input
                    id='signup-email'
                    name='email'
                    type='text'
                    className='form-input mt-2'
                    value={email}
                />
            </div>
            <div className='mb-4'>
                <div className='text-sm text-gray-600'><FormattedMessage id='account.repeatEmail' /></div>
                <input
                    id='signup-email'
                    name='email'
                    type='text'
                    className='form-input mt-2'
                    value={email}
                />
            </div>
            <div className='text-center mt-6'>
                <Button
                    variant='btn btn-indigo w-full'
                    type='button'
                    style={{ transition: 'all .15s ease' }}
                    onClick={onSubmit}
                >
                    <FormattedMessage id='account.save' />
                </Button>
            </div>
        </form>
    )
}

PersonalDetailsForm.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
}

export default PersonalDetailsForm
