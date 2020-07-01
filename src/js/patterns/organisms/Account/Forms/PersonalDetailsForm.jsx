import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { useForm } from 'react-hook-form'

import ButtonWithLoader from 'Atoms/button/WithLoader'
import ErrorMessage from 'Atoms/errorMessage'

const PersonalDetailsForm = ({ intl, firstName, lastName, email, onSubmit, showLoader }) => {
    const requiredField = intl.formatMessage({ id: 'validation.required' })
    const emailMatch = intl.formatMessage({ id: 'validation.emailMatch' })

    const { register, errors, getValues, watch, handleSubmit } = useForm({
        mode: 'onChange',
        defaultValues: {
            firstName, lastName, email, emailComfirmation: email,
        },
    })

    const onNewDetailsSubmit = () => {
        const newValues = getValues()
        onSubmit(newValues)
    }

    return (
        <form onSubmit={handleSubmit(onNewDetailsSubmit)} className='flex-col pt-6 m-auto w-3/4 md:w-11/12 md:p-0 md:pb-2`'>
            <div className='mb-4'>
                <div className='text-sm text-gray-600'><FormattedMessage id='checkout.form.firstName' /></div>
                <input
                    name='firstName'
                    type='text'
                    className='form-input mt-2'
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='firstName' />
            </div>
            <div className='mb-4'>
                <div className='text-sm text-gray-600'><FormattedMessage id='checkout.form.lastName' /></div>
                <input
                    name='lastName'
                    type='text'
                    className='form-input mt-2'
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='lastName' />
            </div>
            <div className='mb-4'>
                <div className='text-sm text-gray-600'><FormattedMessage id='checkout.form.email' /></div>
                <input
                    name='email'
                    type='text'
                    className='form-input mt-2'
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='email' />
            </div>
            <div className='mb-4'>
                <div className='text-sm text-gray-600'><FormattedMessage id='account.repeatEmail' /></div>
                <input
                    name='emailComfirmation'
                    type='text'
                    className='form-input mt-2'
                    ref={register({
                        required: requiredField,
                        validate: value => { return value === watch('email') || emailMatch },
                    })}
                />
                <ErrorMessage errors={errors} name='emailComfirmation' />
            </div>
            <div className='text-center mt-6'>
                <ButtonWithLoader
                    showLoader={showLoader}
                    type='submit'
                    variant='btn btn-indigo w-full'
                >
                    <FormattedMessage id='account.save' />
                </ButtonWithLoader>
            </div>
        </form>
    )
}

PersonalDetailsForm.propTypes = {
    intl: intlShape.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
}

export default injectIntl(PersonalDetailsForm)
