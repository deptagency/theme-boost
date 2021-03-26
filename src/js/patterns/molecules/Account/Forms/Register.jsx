import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { useForm } from 'react-hook-form'

import Button from '../../../atoms/button'
import ButtonWithLoader from '../../../atoms/button/WithLoader'
import ErrorMessage from '../../../atoms/errorMessage'

const Register = ({ intl, showLoginForm, handleRegister, showLoader }) => {
    const { register, handleSubmit, errors } = useForm()
    const validEmail = intl.formatMessage({ id: 'validation.email' })
    const requiredField = intl.formatMessage({ id: 'validation.required' })

    const onSubmit = (data) => {
        // For now salutation and toc are mandatory on the backend,
        // but not according to our design
        handleRegister({
            salutation: '-',
            toc: true,
            ...data,
        })
    }

    return (
        <div>
            <div className='flex items-center justify-center py-4 bg-neutral-200'>
                <span className='mr-8 text-base text-neutral-600 leading-tight font-bold'>
                    <FormattedMessage id='account.register.alreadyRegistered' />
                </span>
                <Button
                    name={intl.formatMessage({ id: 'account.login.login' })}
                    variant='btn-outline btn-outline-black min-w-24 h-10'
                    onClick={showLoginForm}
                >
                    <FormattedMessage id='account.login.login' />
                </Button>
            </div>

            <div className='mx-auto py-5 sm:py-10 w-full md:w-160 bg-background-primary'>
                <div className='px-4 mx-auto w-full sm:w-100'>
                    <div className='mb-1 text-center text-sm text-neutral-600 leading-tight'>
                        <FormattedMessage id='account.login.newToCalwalk' />
                    </div>

                    <div className='mb-6 text-center text-2xl sm:text-3xl text-neutral-900 leading-none font-bold'>
                        <FormattedMessage id='account.signUp' />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-4'>
                            <label className='text-sm text-neutral-700 leading-tight' htmlFor='signup-firstname'>
                                <FormattedMessage id='account.register.firstName' />
                            </label>
                            <input
                                id='login-firstname'
                                name='firstName'
                                type='text'
                                className='form-input mt-2'
                                ref={register({ required: requiredField })}
                            />
                            <ErrorMessage errors={errors} name='firstName' />
                        </div>

                        <div className='mb-4'>
                            <label className='text-sm text-neutral-700 leading-tight' htmlFor='signup-lastname'>
                                <FormattedMessage id='account.register.lastName' />
                            </label>
                            <input
                                id='login-lastname'
                                name='lastName'
                                type='text'
                                className='form-input mt-2'
                                ref={register({ required: requiredField })}
                            />
                            <ErrorMessage errors={errors} name='lastName' />
                        </div>

                        <div className='mb-4'>
                            <label className='text-sm text-neutral-700 leading-tight' htmlFor='signup-email'>
                                <FormattedMessage id='account.form.emailLabel' />
                            </label>
                            <input
                                id='signup-email'
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
                            <label className='text-sm text-neutral-700 leading-tight' htmlFor='login-password'>
                                <FormattedMessage id='account.form.passwordLabel' />
                            </label>
                            <input
                                id='login-password'
                                name='password'
                                type='password'
                                className='form-input mt-2'
                                ref={register({ required: requiredField })}
                            />

                            <div className='mt-2 text-xs text-neutral-600 leading-tight'>
                                <FormattedMessage id='account.form.minimumLength' />
                            </div>
                            <ErrorMessage errors={errors} name='password' />
                        </div>

                        <div className='my-5 h-2px bg-neutral-100' />

                        <ButtonWithLoader
                            name={intl.formatMessage({ id: 'account.register.joinCatwalk' })}
                            showLoader={showLoader}
                            variant='btn btn-primary w-full h-10'
                            type='submit'
                        >
                            <FormattedMessage id='account.register.joinCatwalk' />
                        </ButtonWithLoader>

                        <div className='mt-5 text-xs text-neutral-600 leading-tight'>
                            <FormattedMessage id='account.register.tcConfirm' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

Register.propTypes = {
    intl: intlShape.isRequired,
    showLoginForm: PropTypes.func.isRequired,
    handleRegister: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
}

export default injectIntl(Register)
