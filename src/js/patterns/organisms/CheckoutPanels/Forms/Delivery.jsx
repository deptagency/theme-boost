import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'
import { useForm } from 'react-hook-form'

import ErrorMessage from 'Atoms/errorMessage'

const Delivery = ({ intl, onSubmit }) => {
    const validEmail = intl.formatMessage({ id: 'validation.email' })
    const requiredField = intl.formatMessage({ id: 'validation.required' })

    const { register, errors, getValues } = useForm({ mode: 'onBlur' })

    const onBlur = () => {
        onSubmit(getValues())
    }

    return (
        <form onBlur={onBlur}>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.shippingTo'} />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-name'>
                    <FormattedMessage id={'checkout.form.firstName'} /> *
                </label>
                <input id='delivery-name' name='name' type='text'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.name,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='name' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-surname'>
                    <FormattedMessage id={'checkout.form.lastName'} /> *
                </label>
                <input id='delivery-surname' name='surname' type='text'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.surname,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='surname' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-phone'>
                    <FormattedMessage id={'checkout.form.phone'} />
                </label>
                <input id='delivery-phone' name='phone' className='form-input mt-2' type='text'
                    ref={register()}
                />
            </div>

            <div>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-email'>
                    <FormattedMessage id={'checkout.form.email'} /> *
                </label>
                <input id='delivery-email' name='email'
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
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-address'>
                    <FormattedMessage id={'checkout.form.address'} /> *
                </label>
                <input id='delivery-address' name='address'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.address,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='address' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-city'>
                    <FormattedMessage id={'checkout.form.city'} /> *
                </label>
                <input id='delivery-city' name='city'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.city,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='city' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-zipcode'>
                    <FormattedMessage id={'checkout.form.zipCode'} /> *
                </label>
                <input id='delivery-zipcode' name='zip'
                    className={classnames({
                        'form-input mt-2': true,
                        'border border-red-600': errors.zip,
                    })}
                    ref={register({ required: requiredField })}
                />
                <ErrorMessage errors={errors} name='zip' />
            </div>

            <div>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-country'>
                    <FormattedMessage id={'checkout.form.country'} /> *
                </label>
                <input id='delivery-country' name='country'
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

Delivery.propTypes = {
    intl: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default Delivery
