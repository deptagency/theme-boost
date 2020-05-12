import React from 'react'
import Button from 'Atoms/button'
import { ReactComponent as IconEmotionSad } from 'Icons/tailwind-icons/icon-emotion-sad.svg'

export default {
    title: 'Checkout Confirmation',
}

export const checkoutError = () => {
    return (
        <div className='text-center mt-10 md:mt-20'>
            <IconEmotionSad className='w-20 h-20 inline-block text-gray-400 fill-current ' />
            <div className='text-center text-gray-800 mt-4'>
                <p className='text-2xl font-bold'>
                    Something <br /> went wrong <br /> during payment
                </p>
                <p className='mt-3 text-sm'>
                    Don't worry you haven't been charged, <br /> but you can always try again
                </p>
                <Button variant='btn-outline btn-outline-black mt-6'>Try again</Button>
            </div>
        </div>
    )
}
