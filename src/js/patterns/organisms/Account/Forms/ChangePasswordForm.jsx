import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { useForm } from 'react-hook-form'

import Button from 'Atoms/button'
import ErrorMessage from 'Atoms/errorMessage'
import LoaderButton from 'Molecules/Loaders/LoaderButton'

const ChangePasswordForm = ({ intl, onSubmit, showLoader }) => {
    const requiredField = intl.formatMessage({ id: 'validation.required' })
    const minLength = intl.formatMessage({ id: 'validation.minLength' })
    const passwordMatch = intl.formatMessage({ id: 'validation.passwordMatch' })
    const strongPassword = intl.formatMessage({ id: 'validation.strongPassword' })
    const { register, errors, getValues, watch, handleSubmit } = useForm({ mode: 'onChange' })

    const onNewPasswordSubmit = () => {
        const { oldPassword, newPassword } = getValues()
        onSubmit(oldPassword, newPassword)
    }

    return (
        <form onSubmit={handleSubmit(onNewPasswordSubmit)} className={`flex-col pt-6 m-auto w-3/4 md:w-11/12 md:p-0`}>
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
                        name='oldPassword'
                        type='password'
                        className='form-input mt-2'
                        ref={register({ required: requiredField })}
                    />
                    <ErrorMessage errors={errors} name='oldPassword' />
                </div>
                <div className='mb-4'>
                    <div className='text-sm text-gray-600'><FormattedMessage id='account.password.new' /></div>

                    <input
                        name='newPassword'
                        type='password'
                        className='form-input mt-2'
                        ref={register({
                            required: requiredField,
                            minLength: {
                                value: 10,
                                message: minLength,
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/i,
                                message: strongPassword,
                            },
                        })}
                    />

                    <ErrorMessage errors={errors} name='newPassword' />
                </div>
                <div className='mb-4'>
                    <div className='text-sm text-gray-600'><FormattedMessage id='account.password.confirmNew' /></div>

                    <input
                        name='confirmNewPassword'
                        type='password'
                        className='form-input mt-2'
                        ref={register({
                            required: requiredField,
                            validate: value => { return value === watch('newPassword') || passwordMatch },
                        })}
                    />

                    <ErrorMessage errors={errors} name='confirmNewPassword' />
                </div>
                <div className='text-center mt-6'>
                    {showLoader ?
                        <LoaderButton /> :
                        <Button
                            variant='btn btn-indigo w-full'
                            type='submit'
                            style={{ transition: 'all .15s ease' }}
                        >
                            <FormattedMessage id='account.changePassword' />
                        </Button>}
                </div>
            </div>
        </form>
    )
}

ChangePasswordForm.propTypes = {
    intl: intlShape.isRequired,
    onSubmit: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
}

export default injectIntl(ChangePasswordForm)
