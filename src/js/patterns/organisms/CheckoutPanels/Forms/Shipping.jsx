import React from 'react'
import { FormattedMessage } from 'react-intl'

import Input from 'Atoms/input'

const Shipping = () => {
    return (
        <form>
            <div className='mb-4 text-xs text-gray-500 font-bold leading-tight uppercase'>
                Shipping to
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>First name *</label>
                <Input name='name' className='form-input mt-2' />
                {/*
                <div className='text-sm text-red-600 leading-normal'>This field is required</div>
                */}
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Last name *</label>
                <Input name='surname' className='form-input mt-2' />
            </div>

            <div className='mb-4'>
                <label className='text-sm text-gray-700 leading-tight'>Phone number</label>
                <Input name='phone' className='form-input mt-2' />
            </div>

            <div className=''>
                <label className='text-sm text-gray-700 leading-tight'>E-mail *</label>
                <Input name='email' className='form-input mt-2' />
            </div>
        </form>
    )
}

export default Shipping
