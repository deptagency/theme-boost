import React from 'react'
import { FormattedMessage } from 'react-intl'

import Input from 'Atoms/input'
import Checkbox from 'Atoms/checkbox'

const Address = () => {
    return (
        <div className=''>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                Shipping address
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Address *</label>
                <Input className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>City *</label>
                <Input className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Zip code</label>
                <Input className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Country *</label>
                <Input className='form-input mt-2' />
            </div>

            <div className='bg-gray-200 rounded'>
                <Checkbox label={'Use different billing details'}/>
            </div>
        </div>
    )
}

export default Address
