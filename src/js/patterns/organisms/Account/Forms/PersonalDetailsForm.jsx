import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { useForm } from 'react-hook-form'

import ButtonWithLoader from '../../../atoms/button/WithLoader'
import ErrorMessage from '../../../atoms/errorMessage'

const PersonalDetailsForm = ({ intl, firstName, lastName, onSubmit, showLoader }) => {
    const requiredField = intl.formatMessage({ id: 'validation.required' })

    const { register, errors, getValues, handleSubmit } = useForm({
        mode: 'onChange',
        defaultValues: { firstName, lastName },
    })

    const onNewDetailsSubmit = () => {
        const newValues = getValues()
        onSubmit(newValues)
    }

    return (
        <form
            onSubmit={handleSubmit(onNewDetailsSubmit)}
            className='flex-col pt-6 m-auto w-3/4 md:w-11/12 md:p-0 md:pb-2`'
            >
            <div className='mb-4'>
                <label htmlFor='firstName' className='text-sm text-neutral-600'>
                    <FormattedMessage id='checkout.form.firstName' />
                </label>
                <input
                    id='firstName'
                    name='firstName'
                    type='text'
                    className='form-input mt-2'
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='firstName' />
            </div>
            <div className='mb-4'>
                <label htmlFor='lastName' className='text-sm text-neutral-600'>
                    <FormattedMessage id='checkout.form.lastName' />
                </label>
                <input
                    id='lastName'
                    name='lastName'
                    type='text'
                    className='form-input mt-2'
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='lastName' />
            </div>
            <div className='text-center mt-6'>
                <ButtonWithLoader
                    name={intl.formatMessage({ id: 'account.save' })}
                    showLoader={showLoader}
                    type='submit'
                    variant='btn btn-primary w-full'
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
    onSubmit: PropTypes.func.isRequired,
    showLoader: PropTypes.bool.isRequired,
}

export default injectIntl(PersonalDetailsForm)
