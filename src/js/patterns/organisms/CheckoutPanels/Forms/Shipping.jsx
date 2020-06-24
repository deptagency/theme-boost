import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'
import { useForm } from 'react-hook-form'

import ErrorMessage from 'Atoms/errorMessage'

const Shipping = ({ intl, countries, defaultEmail = '', defaultValues = {}, onSubmit }) => {
    const validEmail = intl.formatMessage({ id: 'validation.email' })
    const requiredField = intl.formatMessage({ id: 'validation.required' })

    if (defaultEmail) {
        defaultValues = {
            ...defaultValues,
            email: defaultEmail,
        }
    }

    const { register, errors, getValues } = useForm({ mode: 'onChange', defaultValues: defaultValues || {} })

    const onChange = () => {
        onSubmit(getValues())
    }

    return (
        <form onChange={onChange}>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.shippingTo'} />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='shipping-firstName'>
                    <FormattedMessage id={'checkout.form.firstName'} /> *
                </label>
                <input id='shipping-firstName' name='firstName' type='text'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.firstName,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='firstName' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='shipping-lastName'>
                    <FormattedMessage id={'checkout.form.lastName'} /> *
                </label>
                <input id='shipping-lastName' name='lastName' type='text'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.lastName,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='lastName' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='shipping-phone'>
                    <FormattedMessage id={'checkout.form.phone'} />
                </label>
                <input id='shipping-phone' name='phone' className='form-input mt-2' type='text'
                    ref={register()}
                />
            </div>

            <div>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='shipping-email'>
                    <FormattedMessage id={'checkout.form.email'} /> *
                </label>
                <input id='shipping-email' name='email'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.email,
                    })}
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

            <div className='-mx-4 my-6 border-b-4 md:border-b-0 border-gray-100' />

            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.shippingAddress'} />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='shipping-streetName'>
                    <FormattedMessage id={'checkout.form.address'} /> *
                </label>
                <input id='shipping-streetName' name='streetName'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.streetName,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='streetName' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='shipping-city'>
                    <FormattedMessage id={'checkout.form.city'} /> *
                </label>
                <input id='shipping-city' name='city'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.city,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='city' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='shipping-postalCode'>
                    <FormattedMessage id={'checkout.form.zipCode'} /> *
                </label>
                <input id='shipping-postalCode' name='postalCode'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.postalCode,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='postalCode' />
            </div>

            <div>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='shipping-country'>
                    <FormattedMessage id={'checkout.form.country'} /> *
                </label>
                <select id='shipping-country' name='country'
                    className={classnames({
                        'form-input mt-2 bg-white': true,
                        'border border-red-600': errors.country,
                    })}
                    ref={register({ required: requiredField })}
                    >
                    <option value='' />
                    {countries.map(country => {
                        return (<option key={country.code} value={country.code}>{country.name}</option>)
                    })}
                </select>

                <ErrorMessage errors={errors} name='country' />
            </div>
        </form>
    )
}

Shipping.propTypes = {
    intl: PropTypes.object.isRequired,
    countries: PropTypes.array.isRequired,
    defaultValues: PropTypes.object,
    defaultEmail: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
}

export default Shipping
