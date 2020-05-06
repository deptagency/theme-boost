import React from 'react'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'
import { ErrorMessage } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import Input from 'Atoms/input'

const Delivery = ({ onSubmit }) => {
    const { register, errors, getValues } = useForm({ mode: 'onBlur' })

    const requiredField = 'This field is required'

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
                {errors.name && <ErrorMessage className='mt-1 text-sm text-red-600 leading-tight' errors={errors} name='name' as='div' />}
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
                {errors.surname && <ErrorMessage className='mt-1 text-sm text-red-600 leading-tight' errors={errors} name='surname' as='div' />}
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
                            message: 'Please enter valid email address',
                        }
                    })}
                />
                {errors.email && <ErrorMessage className='mt-1 text-sm text-red-600 leading-tight' errors={errors} name='email' as='div' />}
            </div>


            <div className='-mx-4 my-6 border-b-4 md:border-b-0 border-gray-100'></div>


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
                {errors.email && <ErrorMessage className='mt-1 text-sm text-red-600 leading-tight' errors={errors} name='address' as='div' />}
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
                {errors.city && <ErrorMessage className='mt-1 text-sm text-red-600 leading-tight' errors={errors} name='city' as='div' />}
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
                {errors.zip && <ErrorMessage className='mt-1 text-sm text-red-600 leading-tight' errors={errors} name='zip' as='div' />}
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
                {errors.country && <ErrorMessage className='mt-1 text-sm text-red-600 leading-tight' errors={errors} name='country' as='div' />}
            </div>
        </form>
    )
}

export default Delivery
