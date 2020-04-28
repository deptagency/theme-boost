import React from 'react'
import { ReactComponent as IconArrowLeft } from 'Icons/tailwind-icons/icon-arrow-left.svg'

const CheckoutFooter = () => {
    return (
        <div className='bg-gray-200 h-12 text-sm pt-3 pl-4 text-gray-800'>
            <button className='flex'>
                <IconArrowLeft
                    className='mr-2 text-base fill-current text-gray-800'
                />
                Back to shop
            </button>
        </div>
    )
}

export default CheckoutFooter
