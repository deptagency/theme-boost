import React from 'react'
import Button from 'Atoms/button'
import { ReactComponent as IconCheckmarkCircle } from 'Icons/tailwind-icons/icon-check-circle.svg'
import { FormattedMessage } from 'react-intl'
import app from 'frontastic-catwalk/src/js/app/app'

const CheckoutConfirmation = () => {
    return (
        <div className='text-center mt-10 md:mt-20'>
            <IconCheckmarkCircle className='w-20 h-20 inline-block text-teal-500 fill-current ' />
            <div className='text-center text-gray-800 mt-4'>
                <p className='text-2xl font-bold'>
                <FormattedMessage id='checkout.hooray'/> <br />
                <FormattedMessage id='checkout.wasConfirmed'/>
                </p>
                <p className='text-sm font-bold mt-2'>
                    Order ID: 12458
                </p>
                <p className='mt-3 text-sm'>
                <FormattedMessage id='checkout.orderConfirmation'/> <br /> 
                <FormattedMessage id='andInvoice.hooray'/>
                    <span className='font-bold ml-1'>
                        thisemail@gmail.com
                    </span>
                </p>
                <Button 
                    variant='btn-outline btn-outline-black mt-6'
                >
                    <FormattedMessage id='continueShopping'/>
                </Button>
                
            </div>
        </div>
    )
}

export default CheckoutConfirmation
