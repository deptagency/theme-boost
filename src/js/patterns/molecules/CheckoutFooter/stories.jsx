import React from 'react'
import { ReactComponent as IconArrowLeft } from 'Icons/tailwind-icons/icon-arrow-left.svg'

export default {
    title: 'Checkout Footer',
}

export const checkoutFooter = () => {
    return (
        <div className='bg-gray-200 h-12 text-sm pt-3 pl-4 text-gray-800'>
            <button className='flex'>
                <IconArrowLeft className='mr-2 text-base fill-current text-gray-800' />
                Back to cart
            </button>
        </div>
    )
}
