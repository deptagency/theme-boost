import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import Button from 'Atoms/button'
import ButtonWithLoader from 'Atoms/button/WithLoader'
import ErrorMessage from 'Atoms/errorMessage'

const Login = ({ intl, showRegisterForm, showForgottenPasswordForm, handleLogin, showLoader }) => {
    const { register, handleSubmit, errors } = useForm()
    const validEmail = intl.formatMessage({ id: 'validation.email' })
    const requiredField = intl.formatMessage({ id: 'validation.required' })

    const onSubmit = ({ email, password }) => {
        handleLogin(email, password)
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='mt-0 md:mt-8 flex flex-col items-center bg-white w-full md:w-160'>
                <div className='px-4 my-8 w-full sm:w-100'>
                    <div className='mb-8 text-2xl sm:text-3xl text-center font-bold leading-none'>
                        <FormattedMessage id='account.login.login' />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4'>
                            <label className='text-sm text-gray-700 leading-tight' htmlFor='login-email'>
                                <FormattedMessage id='account.form.emailLabel' />
                            </label>
                            <input
                                id='login-email'
                                name='email'
                                type='text'
                                className='form-input mt-2'
                                ref={register({
                                    required: requiredField,
                                    pattern: {
                                        // TODO - please double check if this regex is ok
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i,
                                        message: validEmail,
                                    },
                                })}
                            />
                            <ErrorMessage errors={errors} name='email' />
                        </div>

                        <div className='mb-5'>
                            <label className='text-sm text-gray-700 leading-tight' htmlFor='login-password'>
                                <FormattedMessage id='account.form.passwordLabel' />
                            </label>
                            <input
                                id='login-password'
                                name='password'
                                type='password'
                                className='form-input mt-2'
                                ref={register({ required: requiredField })}
                            />
                            <ErrorMessage errors={errors} name='password' />
                        </div>

                        <ButtonWithLoader
                            showLoader={showLoader}
                            type='submit'
                            variant='btn btn-indigo w-full h-10'
                        >
                            <FormattedMessage id='account.login.login' />
                        </ButtonWithLoader>

                        <div
                            className='cursor-pointer mt-4 text-sm text-center text-gray-800 leading-tight'
                            onClick={showForgottenPasswordForm}
                        >
                            <FormattedMessage id='account.login.forgotPassword' />
                        </div>
                    </form>
                </div>

                <div className='-mx-4 w-full h-1 bg-gray-100 md:none' />

                <div className='px-4 my-5 w-full md:w-100 text-center'>
                    <div className='mb-5 text-lg text-center text-gray-500 font-bold'>
                        <FormattedMessage id='account.login.newToCalwalk' />
                    </div>

                    <Button
                        variant='btn-outline btn-outline-black w-64 h-10'
                        onClick={showRegisterForm}
                    >
                        <FormattedMessage id='account.register.createAccount' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    intl: intlShape.isRequired,
    showRegisterForm: PropTypes.func.isRequired,
    showForgottenPasswordForm: PropTypes.func.isRequired,
    handleLogin: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
}

export default injectIntl(Login)
