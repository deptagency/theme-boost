import React from 'react'
import { ReactComponent as IconArrowLeft} from 'Icons/tailwind-icons/icon-arrow-left.svg'


const CheckoutFooter = () => {
    
    return (
        <div className='bg-gray-200 h-12 flex text-sm pt-3 pl-4 text-gray-800'>
            <IconArrowLeft 
                className='mr-2 text-base fill-current text-gray-800'
            />
            Back to shop
        </div>
    )
}

export default CheckoutFooter