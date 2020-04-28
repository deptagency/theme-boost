import React from 'react'
import { FormattedMessage } from 'react-intl'

import Input from 'Atoms/input'

const Address = () => {
    return (
        <div className=''>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                Shipping address
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Address *</label>
                <Input name='address' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>City *</label>
                <Input name='city' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Zip code</label>
                <Input name='zip' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Country *</label>
                <Input name='country' className='form-input mt-2' />
            </div>
        </div>
    )
}

export default Address
