import React from 'react'

import Input from 'Atoms/input'
import Select from 'Atoms/select'

const Billing = () => {
    return (
        <div className=''>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                Billing details
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>First name *</label>
                <Input name='name' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Last name *</label>
                <Input name='surname' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Phone number</label>
                <Input name='phone' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>email *</label>
                <Input name='email' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Address *</label>
                <Input name='address' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>city *</label>
                <Input name='city' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>zip *</label>
                <Input name='zip' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>country *</label>
                <Input name='country' className='form-input mt-2' />
            </div>
        </div>
    )
}

export default Billing
