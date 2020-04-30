import React from 'react'
import { FormattedMessage } from 'react-intl'

import Input from 'Atoms/input'

const Billing = () => {
    return (
        <form>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.billingDetails'} />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-name'>
                    <FormattedMessage id={'checkout.form.firstName'} /> *
                </label>
                <Input id='billing-name' name='name' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-surname'>
                    <FormattedMessage id={'checkout.form.lastName'} /> *
                </label>
                <Input id='billing-surname' name='surname' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-phone'>
                    <FormattedMessage id={'checkout.form.phone'} />
                </label>
                <Input id='billing-phone' name='phone' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-email'>
                    <FormattedMessage id={'checkout.form.email'} /> *
                </label>
                <Input id='billing-email' name='email' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-address'>
                    <FormattedMessage id={'checkout.form.address'} /> *
                </label>
                <Input id='billing-address' name='address' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-city'>
                    <FormattedMessage id={'checkout.form.city'} /> *
                </label>
                <Input id='billing-city' name='city' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-zipcode'>
                    <FormattedMessage id={'checkout.form.zipCode'} /> *
                </label>
                <Input id='billing-zipcode' name='zip' className='form-input mt-2' />
            </div>

            <div>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='billing-country'>
                    <FormattedMessage id={'checkout.form.country'} /> *
                </label>
                <Input id='billing-country' name='country' className='form-input mt-2' />
            </div>
        </form>
    )
}

export default Billing
