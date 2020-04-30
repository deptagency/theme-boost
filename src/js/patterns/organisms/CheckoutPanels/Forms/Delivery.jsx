import React from 'react'
import { FormattedMessage } from 'react-intl'

import Input from 'Atoms/input'

const Delivery = () => {
    return (
        <form>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.shippingTo'} />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-name'>
                    <FormattedMessage id={'checkout.form.firstName'} /> *
                </label>
                <Input id='delivery-name' name='name' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-surname'>
                    <FormattedMessage id={'checkout.form.lastName'} /> *
                </label>
                <Input id='delivery-surname' name='surname' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-phone'>
                    <FormattedMessage id={'checkout.form.phone'} />
                </label>
                <Input id='delivery-phone' name='phone' className='form-input mt-2' />
            </div>

            <div>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-email'>
                    <FormattedMessage id={'checkout.form.email'} /> *
                </label>
                <Input id='delivery-email' name='email' className='form-input mt-2' />
            </div>


            <div className='-mx-4 my-6 border-b-4 md:border-b-0 border-gray-100'></div>


            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                <FormattedMessage id={'checkout.shippingAddress'} />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-address'>
                    <FormattedMessage id={'checkout.form.address'} /> *
                </label>
                <Input id='delivery-address' name='address' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-city'>
                    <FormattedMessage id={'checkout.form.city'} /> *
                </label>
                <Input id='delivery-city' name='city' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-zipcode'>
                    <FormattedMessage id={'checkout.form.zipCode'} />
                </label>
                <Input id='delivery-zipcode' name='zip' className='form-input mt-2' />
            </div>

            <div>
                <label className='text-sm text-gray-700 leading-tight' htmlFor='delivery-country'>
                    <FormattedMessage id={'checkout.form.country'} /> *
                </label>
                <Input id='delivery-country' name='country' className='form-input mt-2' />
            </div>
        </form>
    )
}

export default Delivery
