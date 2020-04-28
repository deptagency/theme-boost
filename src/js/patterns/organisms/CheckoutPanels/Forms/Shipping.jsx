import React from 'react'
import { FormattedMessage } from 'react-intl'

import Input from 'Atoms/input'

const Shipping = () => {
    return (
        <div className=''>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                Shipping to
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>First name *</label>
                <Input className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Last name *</label>
                <Input className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Phone number</label>
                <Input className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>E-mail *</label>
                <Input className='form-input mt-2' />
            </div>
        </div>
    )
}

export default Shipping
