import React from 'react'
import { ReactComponent as IconCheckoutCheckmark} from './../../../icons/tailwind-icons/'


const CheckoutConfirmation = () => {
    
    return (
        <div className='bg-gray-200 h-12 flex text-sm pt-3 pl-2 text-gray-800'>
            <IconCheckoutCheckmark/>
        </div>
    )
}

export default CheckoutConfirmation