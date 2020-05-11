import React from 'react'
export default {
    title: 'Checkout Confirmation',
}

export const checkoutConfirmation = () => {
    return (
        <div className='text-center mt-10 md:mt-20'>
            <IconCheckmarkCircle className='w-20 h-20 inline-block text-teal-500 fill-current ' />
            <div className='text-center text-gray-800 mt-4'>
                <p className='text-2xl font-bold'>
                    Hooray! Your order <br /> was confirmed
                </p>
                <p className='text-sm font-bold mt-2'>
                    Order ID: 12458
                </p>
                <p className='mt-3 text-sm'>
                    We have sent your order confirmation <br /> and invoice to:
                    <span className='font-bold ml-1'>
                        thisemail@gmail.com
                    </span>
                </p>
                <Button variant='btn-outline btn-outline-black mt-6'>Continue shopping</Button>
            </div>
        </div>
    )
}
