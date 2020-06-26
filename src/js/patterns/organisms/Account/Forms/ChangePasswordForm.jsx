import React from 'react'
import PropTypes from 'prop-types'
import Button from 'Atoms/button'
import { FormattedMessage } from 'react-intl'

const ChangePasswordForm = ({ onSubmit = () => {} }) => {
    return (
        <form className={`flex-col pt-6 m-auto w-3/4 md:w-11/12 md:p-0`}>
            <div className='text-sm text-gray-600'>
                <span><FormattedMessage id='account.inOrder' /></span><span className='font-bold'> <FormattedMessage id='account.protect' /> </span><span><FormattedMessage id='account.passwordContain' /></span>
                <ul className='list-disc m-4'>
                    <li><FormattedMessage id='account.characters' /></li>
                    <li><FormattedMessage id='account.upperCase' /></li>
                    <li><FormattedMessage id='account.number' /></li>
                    <li><FormattedMessage id='account.specialCharacter' /></li>
                </ul>
            </div>

            <div className='mt-6 mb-4'>
                <div className='mb-4'>
                    <div className='text-sm text-gray-600'><FormattedMessage id='account.login.password' /></div>
                    <input
                        id='login-password'
                        name='password'
                        type='password'
                        className='form-input mt-2'
                    />
                </div>
                <div className='mb-4'>
                    <div className='text-sm text-gray-600'><FormattedMessage id='account.password.new' /></div>
                    <input
                        id='login-password'
                        name='password'
                        type='password'
                        className='form-input mt-2'
                    />
                    {/* check about id later on */}
                </div>
                <div className='mb-4'>
                    <div className='text-sm text-gray-600'><FormattedMessage id='account.password.confirmNew' /></div>
                    <input
                        id='login-password'
                        name='password'
                        type='password'
                        className='form-input mt-2'
                    />
                    {/* check about id later on */}
                </div>
                <div className='text-center mt-6'>
                    <Button
                        variant='btn btn-indigo w-full'
                        type='button'
                        style={{ transition: 'all .15s ease' }}
                        onClick={onSubmit}
                    >
                        <FormattedMessage id='account.changePassword' />
                    </Button>
                </div>
            </div>
        </form>
    )
}

ChangePasswordForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default ChangePasswordForm
