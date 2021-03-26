import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { convertToCountryName } from './../countries'
import ErrorMessage from '../../../atoms/errorMessage'

const Billing = ({ intl, countries, defaultValues = {}, onSubmit }) => {
    const requiredField = intl.formatMessage({ id: 'validation.required' })

    const { register, errors, getValues } = useForm({ mode: 'onChange', defaultValues: defaultValues || {} })

    const onChange = () => {
        onSubmit(getValues())
    }

    return (
        <form onChange={onChange}>
            <div className='mb-4 text-xs text-neutral-600 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.billingDetails'} />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='billing-firstName'>
                    <FormattedMessage id={'checkout.form.firstName'} /> *
                </label>
                <input
                    id='billing-firstName'
                    name='firstName'
                    type='text'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.firstName,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='firstName' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='billing-lastName'>
                    <FormattedMessage id={'checkout.form.lastName'} /> *
                </label>
                <input
                    id='billing-lastName'
                    name='lastName'
                    type='text'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.surname,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='lastName' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='billing-phone'>
                    <FormattedMessage id={'checkout.form.phone'} />
                </label>
                <input id='billing-phone' name='phone' type='text' className='form-input mt-2' ref={register()} />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='billing-streetName'>
                    <FormattedMessage id={'checkout.form.address'} /> *
                </label>
                <input
                    id='billing-streetName'
                    name='streetName'
                    type='text'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.streetName,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='streetName' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='billing-city'>
                    <FormattedMessage id={'checkout.form.city'} /> *
                </label>
                <input
                    id='billing-city'
                    name='city'
                    type='text'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.city,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='city' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='billing-postalCode'>
                    <FormattedMessage id={'checkout.form.zipCode'} /> *
                </label>
                <input
                    id='billing-postalCode'
                    name='postalCode'
                    type='text'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.postalCode,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='postalCode' />
            </div>

            <div>
                <label className='text-sm text-neutral-700 leading-tight' htmlFor='billing-country'>
                    <FormattedMessage id={'checkout.form.country'} /> *
                </label>
                <select
                    id='billing-country'
                    name='country'
                    className={classnames({
                        'form-input mt-2 bg-background-primary': true,
                        'border border-red-600': errors.country,
                    })}
                    ref={register({ required: requiredField })}
                >
                    <option value='' />
                    {countries.map((country, key) => {
                        return (
                            <option key={key} value={country}>
                                {convertToCountryName(intl, country)}
                            </option>
                        )
                    })}
                </select>
                <ErrorMessage errors={errors} name='country' />
            </div>
        </form>
    )
}

Billing.propTypes = {
    intl: PropTypes.object.isRequired,
    defaultValues: PropTypes.object,
    countries: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default Billing
