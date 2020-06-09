import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'

import Button from 'Atoms/button'
import ErrorMessage from 'Atoms/errorMessage'

const ForgottenPassword = ({ intl, handleRequestPasswordReset, showLoginForm }) => {
    const { register, handleSubmit, errors } = useForm()
    const validEmail = intl.formatMessage({ id: 'validation.email' })
    const requiredField = intl.formatMessage({ id: 'validation.required' })

    const onSubmit = ({ email }) => {
        handleRequestPasswordReset(email.toLowerCase())
    }

    return (
        <div className='m-8'>
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

                <Button type='submit' variant='btn btn-indigo w-full h-10'>
                    <FormattedMessage id='account.requestResetPassword' />
                </Button>

                <Button onClick={showLoginForm} variant='btn btn-indigo w-full h-10 mt-5'>
                    <FormattedMessage id='account.login.login' />
                </Button>
            </form>
        </div>
    )
}

ForgottenPassword.propTypes = {
    intl: intlShape.isRequired,
    handleRequestPasswordReset: PropTypes.func.isRequired,
    showLoginForm: PropTypes.func.isRequired,
}

export default injectIntl(ForgottenPassword)
