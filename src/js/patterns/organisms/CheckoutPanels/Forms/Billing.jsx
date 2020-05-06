import React from 'react'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'
import { useForm } from 'react-hook-form'

import ErrorMessage from 'Atoms/errorMessage'

const Billing = ({ intl, onSubmit }) => {
    const validEmail = intl.formatMessage({id: 'validation.email' })
    const requiredField = intl.formatMessage({id: 'validation.required' })

    const { register, errors, getValues } = useForm({ mode: 'onBlur' })

    const onBlur = () => {
        onSubmit(getValues())
    }

    return (
        <form onBlur={onBlur}>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.billingDetails'} />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-name'>
                    <FormattedMessage id={'checkout.form.firstName'} /> *
                </label>
                <input id='billing-name' name='name' type='text' 
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.name,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='name' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-surname'>
                    <FormattedMessage id={'checkout.form.lastName'} /> *
                </label>
                <input id='billing-surname' name='surname' type='text' 
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.surname,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='surname' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-phone'>
                    <FormattedMessage id={'checkout.form.phone'} />
                </label>
                <input id='billing-phone' name='phone' type='text' className='form-input mt-2' type='text' 
                    ref={register()}
                />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-email'>
                    <FormattedMessage id={'checkout.form.email'} /> *
                </label>
                <input id='billing-email' name='email' type='text' 
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.phone,
                    })}
                    ref={register({
                        required: requiredField,
                        pattern: {
                            // TODO - please double check if this regex is ok
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i,
                            message: validEmail,
                        }
                    })}
                />
                <ErrorMessage errors={errors} name='email' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-address'>
                    <FormattedMessage id={'checkout.form.address'} /> *
                </label>
                <input id='billing-address' name='address' type='text' 
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.address,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='address' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-city'>
                    <FormattedMessage id={'checkout.form.city'} /> *
                </label>
                <input id='billing-city' name='city' type='text' 
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.city,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='city' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-zipcode'>
                    <FormattedMessage id={'checkout.form.zipCode'} /> *
                </label>
                <input id='billing-zipcode' name='zip' type='text' 
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.zip,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='zip' />
            </div>

            <div>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-country'>
                    <FormattedMessage id={'checkout.form.country'} /> *
                </label>
                <input id='billing-country' name='country' type='text'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.country,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='country' />
            </div>
        </form>
    )
}

export default Billing
