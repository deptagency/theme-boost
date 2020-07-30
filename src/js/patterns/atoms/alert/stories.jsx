import React from 'react'
import { ReactComponent as IconCheckmarkCircle } from 'Icons/tailwind-icons/icon-check-circle.svg'

export default {
    title: 'Alert',
}

export const AccountDetailsChanged = () => {
    return (
        <div className='flex items-center bg-secondary-main text-white text-sm px-4 py-3 mt-5 md:w-6/12 md:mx-auto' type='alert'>
            <IconCheckmarkCircle className='w-5 h-5 mr-2 inline-block text-white fill-current ' />
            <p>Account details changed</p>
        </div>
    )
}

export const PasswordChanged = () => {
    return (
        <div className='flex items-center bg-secondary-main text-white text-sm px-4 py-3 mt-5 md:w-6/12 md:mx-auto' type='alert'>
            <IconCheckmarkCircle className='w-5 h-5 mr-2 inline-block text-white fill-current ' />
            <p>Password changed successfully</p>
        </div>
    )
}
